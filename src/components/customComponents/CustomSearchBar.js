import React, { useState } from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';

const CustomSearchBar = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (searchText) => {
    setSearch(searchText);
  };

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      containerStyle ={styles.searchContainer}
      inputContainerStyle ={styles.inputSearchContainer}
      value={search}
    />
  );
};

export default CustomSearchBar;
const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:"blue",
        borderColor:'#F0F1F3',
        height:40,
        marginBottom:100
    },
    inputSearchContainer:{
        backgroundColor:"white",
        height:20,
        borderColor:"#F0F1F3",
        borderWidth:2
    }
  });


