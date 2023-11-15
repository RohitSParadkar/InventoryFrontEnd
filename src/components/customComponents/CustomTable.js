// CustomTable.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar,TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CustomTable = ({ title }) => {
  const tableHead = ['Name', 'Sold Quantity', 'Remaining Quantity', 'Price'];
  const tableTitle = ['Maggie', 'Egg', 'Sugar', 'Coffee'];
  const tableData = [
    ['1', '2', '200'],
    ['10', '12', '150'],
    ['11', '20', '100'],
    ['14', '13', '500'],
   
  ];

  return (
    <ScrollView style={styles.container}>
        <Text>{title}</Text>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={tableHead}
            flexArr={[1, 1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity>
        <Text style={{color:'blue'}}>Show more</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default CustomTable;

const styles = StyleSheet.create({
    flexContainer:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 6,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});
