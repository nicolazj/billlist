import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { useBill } from '../hooks/useBill';
import { ReBox, ReText } from '../styling/primitives';
import { BillItem } from './BillItem';

export const Loading = () => {
  return (
    <ReBox flex={1} alignItems="center">
      <ReText variant={'header'}>loading...</ReText>
    </ReBox>
  );
};

export const BillList = () => {
  const { status, data, fetchNextPage } = useBill();
  let bills = data?.pages.flatMap((page) => page.data);
  const onEndReached = () => {
    if (status === 'success') {
      fetchNextPage();
    }
  };
  if (status === 'loading') {
    return <Loading />;
  } else if (status === 'error') {
    // TODO
    return null;
  }

  return (
    <ReBox flex={1}>
      <FlashList
        data={bills}
        renderItem={({ item }) => <BillItem bill={item} />}
        estimatedItemSize={100}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
      />
    </ReBox>
  );
};
