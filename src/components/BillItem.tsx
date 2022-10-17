import React from 'react';
import { Image } from 'react-native';
import { Bill } from '../types';
import { ReBox, ReText } from '../styling/primitives';
import { formatDateTime, formatMoney } from '../utils';
import { BillStatus } from './BillStatus';

interface BillItemProps {
  item: Bill;
  index: number;
}
export const BillItem = ({ item }: BillItemProps) => {
  return (
    <ReBox flexDirection={'row'} borderBottomColor={'black'} borderBottomWidth={1}>
      <ReBox p={'s'}>
        <Image source={{ uri: item.image }} defaultSource={{}} style={{ width: 90, height: 160 }} />
      </ReBox>
      <ReBox p={'s'}>
        <ReText variant={'header'}># {item.id}</ReText>
        <ReText variant={'subheader'}>{formatMoney(item.amount)}</ReText>
        <ReText>{formatDateTime(item.ts)}</ReText>
        <BillStatus status={item.status} />
      </ReBox>
    </ReBox>
  );
};
