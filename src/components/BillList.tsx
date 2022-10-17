import React from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];

export const BillList = () => {
  return <FlashList data={DATA} renderItem={({ item }) => <Text>{item.title}</Text>} estimatedItemSize={200} />;
};
