import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {DataTable, Searchbar, Dialog, Portal} from 'react-native-paper';
import {PaperProvider} from 'react-native-paper';
import {ModalAppInput} from '../../customComponents/AppInput';
import {Button} from '@rneui/themed';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  creatProductsApi,
  inventoryListsApi,
  searchByTransactionName,
  inventoryByProductid,
  transactionAPI,
  transactionsListsApi,
  transactionById,
} from '../../../api/AuthApi';
import UnderlineSVG from '../../../assets/svg/UnderlineSVG';

const Buy = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [buyerID, setBuyerID] = useState('');
  const [productID, setProductID] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [expiry, setExpiry] = useState('');
  const [response, setResponse] = useState();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('descending');
  const [inventoryListData, setInventoryListData] = useState([]);
  const [transactionDetails, setTransactionDetails] = useState();
  const [availableQnt, setAvailableQnt] = useState();
  const [numberOfItemsPerPageList] = useState([4, 5, 6]);
  const [dropdownData, setDropdownData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const res = await inventoryListsApi();
      setInventoryListData(res);
      const mappedData = res.map(product => ({
        label: product.productName,
        value: product.productID.toString(),
      }));
      setDropdownData(mappedData);
    } catch (error) {
      console.error('Error fetching inventory list:', error);
    }
  };

  const fetchTransactionData = async () => {
    try {
      const res = await transactionsListsApi();
      setTransactionData(res);
    } catch (error) {
      console.error('Error fetching transaction list:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchTransactionData();
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    const mappedItems =
      transactionData?.map(transaction => ({
        key: transaction._id,
        productName: transaction.productName,
        quantity: transaction.quantity,
        amount: transaction.amount,
        type: transaction.type,
      })) || [];
    setItems(mappedItems);
  }, [transactionData]);

  const [items, setItems] = useState([]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const handleSort = () => {
    setSort(prevSort =>
      prevSort === 'descending' ? 'ascending' : 'descending',
    );
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sort === 'ascending') {
      return a.productName.localeCompare(b.productName);
    } else {
      return b.productName.localeCompare(a.productName);
    }
  });

  const filteredItems = sortedItems.filter(item => item.type === 'buy');

  const paginatedItems = filteredItems.slice(from, to);

  const handleBuy = async () => {
    try {
      const res = await transactionAPI(
        buyerID,
        productID,
        category,
        quantity,
        amount,
        'buy',
      );
      setTransactionData(res);
      setModalVisible(!isModalVisible);
      setAvailableQnt(null);
      setValue(null);
      setProductID('');
      setCategory('');
      setQuantity('');
      setAmount('');
      setExpiry('');
      Toast.show({
        type: 'success',
        text1: 'Order',
        text2: 'Your buy order placed successfully ! ',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handledropdown = async item => {
    setValue(item.value);
    setIsFocus(false);
    try {
      const res = await inventoryByProductid(item.value);
      const firstItem = res[0];
      if (firstItem) {
        setAvailableQnt(firstItem);
        setProductID(item.value);
      } else {
        setAvailableQnt(null);
        setProductID('');
      }
    } catch (error) {
      console.error('Error fetching inventory list:', error);
    }
  };

  const handleAdd = () => {
    setModalVisible(!isModalVisible);
    setAvailableQnt(null);
    setBuyerID('');
    setValue(null);
    setProductID('');
    setCategory('');
    setQuantity('');
    setAmount('');
    setExpiry('');
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Product Name
        </Text>
      );
    }
    return null;
  };

  const onChangeSearch = async query => {
    setSearchQuery(query);
    try {
      if (query.trim() === '') {
        fetchTransactionData();
      } else {
        const res = await searchByTransactionName(query);
        setTransactionData(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCellClick = async cellData => {
    try {
      const res = await transactionById(cellData.key);
      setTransactionDetails(res);
      console.warn(res);
      setVisible(!visible);
    } catch (error) {
      console.error('Error fetching transaction details:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
          <Text style={styles.boldText}>Buy</Text>
          <UnderlineSVG />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
          <Text style={[styles.boldText]}>Sell</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={styles.boldText}>History</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginBottom: 10}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{backgroundColor: '#F3F9FB', borderWidth: 1, height: 50}}
        />
      </View>

      <View style={styles.tableContainer}>
        <DataTable
          style={{
            backgroundColor: '#F2F2F4',
            borderRadius: 10,
            borderWidth: 1,
          }}>
          <DataTable.Header
            style={{backgroundColor: '#E7EFF3', borderRadius: 10}}>
            <TouchableOpacity onPress={handleSort}>
              <DataTable.Title sortDirection={sort} style={styles.tableHeader}>
                Product
              </DataTable.Title>
            </TouchableOpacity>
            <DataTable.Title numeric style={styles.tableHeader}>
              Quantity
            </DataTable.Title>
            <DataTable.Title numeric style={styles.tableHeader}>
              Price
            </DataTable.Title>
            <DataTable.Title numeric style={styles.tableHeader}>
              Type
            </DataTable.Title>
          </DataTable.Header>

          {paginatedItems.map(item => (
            <DataTable.Row key={item.key} onPress={() => handleCellClick(item)}>
              <DataTable.Cell
                style={{justifyContent: 'center', alignItems: 'center'}}>
                {item.productName}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                style={{justifyment: 'center', alignItems: 'center'}}>
                {item.quantity}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                style={{justifyment: 'center', alignItems: 'center'}}>
                {item.amount}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                style={{
                  justifyment: 'center',
                  alignItems: 'center',
                  color: 'green',
                }}>
                {item.type}
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(sortedItems.length / itemsPerPage)}
            onPageChange={newPage => setPage(newPage)}
            label={`${from + 1}-${to} of ${sortedItems.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
          />
        </DataTable>
        <TouchableOpacity onPress={handleAdd} style={styles.bottomContainer}>
          <View style={styles.circle}>
            <Image
              style={styles.addLogo}
              source={require('../../../assets/logo/add.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flex: 1}}>
          <ScrollView>
            <Modal isVisible={isModalVisible}>
              <View style={[styles.modalContainer, {height: height * 0.6}]}>
                <View style={styles.newProduct}>
                  <Text style={styles.productTitle}>Buy</Text>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Buyer:</Text>
                    <ModalAppInput
                      onChangeText={setBuyerID}
                      value={buyerID}
                      autoFocus={true}
                      placeholder={'Seller ID'}
                    />
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Product Name:</Text>
                    <View style={styles.container}>
                      {renderLabel()}
                      <Dropdown
                        style={[
                          styles.dropdown,
                          isFocus && {borderColor: 'blue'},
                        ]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={dropdownData}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={handledropdown}
                      />
                    </View>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Category :</Text>
                    <ModalAppInput
                      onChangeText={setCategory}
                      value={category}
                      autoFocus={true}
                      placeholder={'Category'}
                    />
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Quantity:</Text>
                    <ModalAppInput
                      onChangeText={setQuantity}
                      value={quantity}
                      autoFocus={true}
                      placeholder={'Quantity'}
                    />
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Amount:</Text>
                    <ModalAppInput
                      onChangeText={setAmount}
                      value={amount}
                      autoFocus={true}
                      placeholder={'Amount'}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.idText}>Available quantity:</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.idText}>
                        {availableQnt ? `${availableQnt?.quantity}` : '_'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonContiner}>
                  <Button
                    color="#1A1A27"
                    containerStyle={styles.loginButton}
                    onPress={handleAdd}>
                    Cancel
                  </Button>
                  <Button
                    color="#1A1A27"
                    containerStyle={styles.loginButton}
                    onPress={handleBuy}>
                    Buy
                  </Button>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </View>
        {/* another modal */}
        {visible&&<View style={{flex: 1}}>
          <ScrollView>
            <Modal isVisible={visible}>
              <View style={[styles.modalContainer, {height: height * 0.6}]}>
                <View style={styles.newProduct}>
                  <Text style={styles.productTitle}>Product Details</Text>
                  <View style={styles.rowFlexCenter}>
                    <Text style={[styles.idText,styles.flexStart]}>Transction ID :</Text>
                    <Text>{transactionDetails[0]._id}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={[styles.idText,styles.flexStart]}>Buyer ID :</Text>
                    <Text style={{justifyContent:'flex-start'}}>{transactionDetails[0].buyerId}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Product Name :</Text>
                    <Text>{transactionDetails[0].productName}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Product ID :</Text>
                    <Text>{transactionDetails[0].productId}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Category :</Text>
                    <Text>{transactionDetails[0].category}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Quantity :</Text>
                    <Text>{transactionDetails[0].quantity}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Amount :</Text>
                    <Text>{transactionDetails[0].amount}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Transction Type :</Text>
                    <Text>{transactionDetails[0].type}</Text>
                  </View>
                  <View style={styles.rowFlexCenter}>
                    <Text style={styles.idText}>Date :</Text>
                    <Text>{transactionDetails[0].date}</Text>
                  </View>
                  <Button
                    color="#1A1A27"
                    containerStyle={styles.loginButton}
                    onPress={()=>{setVisible(!visible);}}>
                    Close
                  </Button>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </View>}
      </View>
    </ScrollView>
  );
};

export default Buy;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F3F9FB',
    padding: width * 0.085,
  },
  circle: {
    backgroundColor: '#1A1A27',
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLogo: {
    width: width * 0.15,
    height: width * 0.15,
  },
  tableContainer: {
    flex: 1,
    height: height * 0.8,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: width * 0.1,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderBottomLeftRadius: width * 0.1,
    borderBottomRightRadius: width * 0.1,
  },
  newProduct: {
    flex: 1,
    margin: 10,
  },
  rowFlexCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:10,
    alignItems: 'center',
  },
  idText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#48505E',
  },
  flexStart:{
    justifyContent:'flex-start'
  },
  productTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#48505E',
    marginLeft: width * 0.1,
    marginBottom: width * 0.05,
  },
  loginButton: {
    width: width * 0.27,
    marginBottom: width * 0.05,
    justifyContent: 'center',
    borderRadius: width * 0.05,
  },
  buttonContiner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: width * 0.02,
    paddingRight: width * 0.04,
  },
  boldText: {
    color: '#1A1A27',
    fontFamily: 'DM Sans',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  tableHeader: {
    color: '#495D69',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 14,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
