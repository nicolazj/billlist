/**
 */

import * as React from 'react';
import { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavStack from './navigation/NavStack';

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default App;
