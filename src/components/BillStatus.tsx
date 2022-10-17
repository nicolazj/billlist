import React from 'react';
import { Bill } from '../types';
import { ReBox, ReText } from '../styling/primitives';
import { Popable } from 'react-native-popable';
import { StyleSheet } from 'react-native';

const mapping: Record<Bill['status'], string> = {
  Paid: 'This bill is paid',
  Processing: 'This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day. ',
  Scheduled: "This bill is scheduled to be paid and will be paid on the due date, you're in good hands!, etc.)",
  'Unable to pay': 'This bill is unable to pay',
};

interface BillStatusProps {
  status: Bill['status'];
}

const styles = StyleSheet.create({
  popable: {
    minWidth: 200,
  },
});

export const BillStatus = ({ status }: BillStatusProps) => {
  return (
    <Popable
      position="bottom"
      style={styles.popable}
      content={
        <ReBox p="s">
          <ReText color={'white'}>{mapping[status]}</ReText>
        </ReBox>
      }
    >
      <ReText>{status}ℹ️</ReText>
    </Popable>
  );
};
