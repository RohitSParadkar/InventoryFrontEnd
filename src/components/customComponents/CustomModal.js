import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import AppButton from './AppButton';
import {ModalAppInput} from './AppInput';
import {Button} from '@rneui/themed';
function CustomModal({isModalVisible,handleButton1,handleButton2}) {
  const [productName, setProductName] = useState('');

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Modal isVisible={isModalVisible}>
          <View style={[styles.modalContainer,{ height: height * 0.6,}]}>
            <View style={styles.newProduct}>
              <Text style={styles.productTitle}>New Product</Text>
              <View style={styles.rowFlexCenter}>
                <Text style={styles.idText}>Product Name:</Text>
                <ModalAppInput
                  onChangeText={setProductName}
                  value={productName}
                  autoFocus={true}
                  placeholder={'Enter product name'}
                />
              </View>
              <View style={styles.rowFlexCenter}>
                <Text style={styles.idText}>Product ID:</Text>
                <ModalAppInput
                  onChangeText={setProductName}
                  value={productName}
                  autoFocus={true}
                  placeholder={'Product ID'}
                />
              </View>
              <View style={styles.rowFlexCenter}>
                <Text style={styles.idText}>Category :</Text>
                <ModalAppInput
                  onChangeText={setProductName}
                  value={productName}
                  autoFocus={true}
                  placeholder={'Category'}
                />
              </View>
              <View style={styles.rowFlexCenter}>
                <Text style={styles.idText}>Quantity:</Text>
                <ModalAppInput
                  onChangeText={setProductName}
                  value={productName}
                  autoFocus={true}
                  placeholder={'Quantity'}
                />
              </View>
              <View style={styles.rowFlexCenter}>
                <Text style={styles.idText}>Amount:</Text>
                <ModalAppInput
                  onChangeText={setProductName}
                  value={productName}
                  autoFocus={true}
                  placeholder={'Amount'}
                />
              </View>
              <View style={styles.rowFlexCenter}>
                <Text style={styles.idText}>Expiry Date:</Text>
                <ModalAppInput
                  onChangeText={setProductName}
                  value={productName}
                  autoFocus={true}
                  placeholder={'Expiry Date'}
                />
              </View>
            </View>
            <View style={styles.buttonContiner}>
              <Button
                color="#1A1A27"
                containerStyle={styles.loginButton}
                onPress={handleButton1}>
                Cancle
              </Button>
              <Button
                color="#1A1A27"
                containerStyle={styles.loginButton}
                onPress={handleButton2}>
                Add Product
              </Button>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

export const BuyModal = ({isModalVisible,handleButton1,handleButton2,buttonName,title})=>{
    const [productName, setProductName] = useState('');
    return( <View style={{flex: 1}}>
        <ScrollView>
          <Modal isVisible={isModalVisible}>
            <View style={[styles.modalContainer,{ height: height * 0.6,}]}>
              <View style={styles.newProduct}>
                <Text style={styles.productTitle}>{title}</Text>
                <View style={styles.rowFlexCenter}>
                  <Text style={styles.idText}>Supplier:</Text>
                  <ModalAppInput
                    onChangeText={setProductName}
                    value={productName}
                    autoFocus={true}
                    placeholder={'Supplier Name'}
                  />
                </View>
                <View style={styles.rowFlexCenter}>
                  <Text style={styles.idText}>Category :</Text>
                  <ModalAppInput
                    onChangeText={setProductName}
                    value={productName}
                    autoFocus={true}
                    placeholder={'Category'}
                  />
                </View>
                <View style={styles.rowFlexCenter}>
                  <Text style={styles.idText}>Product :</Text>
                  <ModalAppInput
                    onChangeText={setProductName}
                    value={productName}
                    autoFocus={true}
                    placeholder={'Product name'}
                  />
                </View>
                <View style={styles.rowFlexCenter}>
                  <Text style={styles.idText}>Quantity:</Text>
                  <ModalAppInput
                    onChangeText={setProductName}
                    value={productName}
                    autoFocus={true}
                    placeholder={'Quantity'}
                  />
                </View>
                <View style={styles.rowFlexCenter}>
                  <Text style={styles.idText}>Amount:</Text>
                  <ModalAppInput
                    onChangeText={setProductName}
                    value={productName}
                    autoFocus={true}
                    placeholder={'Amount'}
                  />
                </View>
                <View style={styles.rowFlexCenter}>
                  <Text style={styles.idText}>Expiry Date:</Text>
                  <ModalAppInput
                    onChangeText={setProductName}
                    value={productName}
                    autoFocus={true}
                    placeholder={'Expiry Date'}
                  />
                </View>
              </View>
              <View style={styles.buttonContiner}>
                <Button
                  color="#1A1A27"
                  containerStyle={styles.loginButton}
                  onPress={handleButton1}>
                  Cancle
                </Button>
                <Button
                  color="#1A1A27"
                  containerStyle={styles.loginButton}
                  onPress={handleButton2}>
                  {buttonName}
                </Button>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>)
}
const {width, height} = Dimensions.get('window');
export default CustomModal;
const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  idText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#48505E',
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
    marginBottom:width * 0.05,
    justifyContent: 'center',
    borderRadius: width * 0.05,
  },
  buttonContiner:{
    flexDirection:'row',
    justifyContent:'flex-end',
    columnGap:width*0.02,
    paddingRight:width*0.04,
    
  }
});
