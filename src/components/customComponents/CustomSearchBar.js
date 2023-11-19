import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor:'#F3F9FB',borderWidth:1,height:50 }}
    />
  );
};

export default CustomSearchBar;
const styles = StyleSheet.create({
 
});
