import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { Bill } from '../types';
import { ReBox, ReText } from '../styling/primitives';
import { formatDateTime, formatMoney } from '../utils';
import { BillStatus } from './BillStatus';
import ImageView from 'react-native-image-viewing';
interface BillItemProps {
  bill: Bill;
}
export const BillItem = ({ bill: item }: BillItemProps) => {
  const [visible, setVisible] = useState(false);
  const onImagePress = () => {
    setVisible(true);
  };
  return (
    <>
      <ReBox flexDirection={'row'} borderBottomColor={'black'} borderBottomWidth={1}>
        <ReBox p={'s'}>
          <Pressable onPress={onImagePress}>
            <Image source={{ uri: item.image }} defaultSource={{}} style={{ width: 90, height: 160 }} />
          </Pressable>
        </ReBox>
        <ReBox p={'s'}>
          <ReText variant={'header'}># {item.id}</ReText>
          <ReText variant={'subheader'}>{formatMoney(item.amount)}</ReText>
          <ReText>{formatDateTime(item.ts)}</ReText>
          <BillStatus status={item.status} />
        </ReBox>
      </ReBox>
      {visible && (
        <ImageView
          images={[{ uri: item.image }]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setVisible(false)}
        />
      )}
    </>
  );
};
