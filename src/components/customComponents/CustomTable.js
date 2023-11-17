// CustomTable.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar,TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CustomTable = ({ title,tableHead,tableData}) => {


  return (
    <ScrollView style={styles.container}>
        <Text>{title}</Text>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={tableHead}
            flexArr={[1, 1, 1, 2,2]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={tableData}
              flexArr={[1, 1, 1,2,2]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
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
    paddingTop: 4,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 40 },
  text: { textAlign: 'center' },
});
