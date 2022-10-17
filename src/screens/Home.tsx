import * as React from 'react';
import { ReactElement } from 'react';
import { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../navigation/NavStack.interface';

import styles from './Home.styles';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = (): ReactElement => {
  const navigation = useNavigation<homeScreenProp>();

  const navigateToBillList = useCallback((): void => {
    navigation.navigate('BillList');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity accessibilityRole="button" style={styles.button} onPress={navigateToBillList}>
        <Text style={styles.text}>View Bill List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
