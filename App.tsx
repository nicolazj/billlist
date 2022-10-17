/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BillList } from './src/components/BillList';
import theme from './src/styling/theme';
import { ReBox } from './src/styling/primitives';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ReBox flex={1} >
            <BillList />
          </ReBox>
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
