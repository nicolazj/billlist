import { StackScreenProps } from '@react-navigation/stack';

/* eslint-disable-next-line @typescript-eslint/consistent-type-definitions */
export type RootStackParamList = {
  Home: undefined;
  BillList: undefined;
};

export type Props = StackScreenProps<RootStackParamList, 'BillList'>;
