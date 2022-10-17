import * as React from 'react';
import { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BillList from '../screens/BillList';
import Home from '../screens/Home';

import { RootStackParamList } from './NavStack.interface';

const Stack = createStackNavigator<RootStackParamList>();

const NavStack = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#f9de68' },
        headerTitleStyle: { color: 'black' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'deferit Bill List App',
        }}
      />

      <Stack.Screen
        name="BillList"
        component={BillList}
        options={{
          title: 'Bill List',
        }}
      />
    </Stack.Navigator>
  );
};

export default NavStack;
