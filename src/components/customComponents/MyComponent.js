import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('descending');
  const [numberOfItemsPerPageList] = useState([3, 5, 6]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

  const [items] = useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 113,
      fat: 26,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 315,
      fat: 3.7,
    },
    {
      key: 5,
      name: 'Maggie',
      calories: 190,
      fat: 12,
    },
    {
      key: 6,
      name: 'Ice cream',
      calories: 262,
      fat: 16,
    },
    {
      key: 7,
      name: 'Vegetables',
      calories: 159,
      fat: 6,
    },
    {
      key: 8,
      name: 'Apple',
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const handleSort = () => {
    setSort((prevSort) => (prevSort === 'descending' ? 'ascending' : 'descending'));
  };

  // Sort items based on the current sorting order
  const sortedItems = [...items].sort((a, b) => {
    if (sort === 'ascending') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Apply pagination after sorting
  const paginatedItems = sortedItems.slice(from, to);

  return (
    <DataTable>
      <DataTable.Header>
        <TouchableOpacity onPress={handleSort}>
          <DataTable.Title sortDirection={sort}>Dessert</DataTable.Title>
        </TouchableOpacity>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      {paginatedItems.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(sortedItems.length / itemsPerPage)}
        onPageChange={(newPage) => setPage(newPage)}
        label={`${from + 1}-${to} of ${sortedItems.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default MyComponent;
