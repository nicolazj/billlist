import React, { HTMLAttributes, ReactElement } from 'react';
import { NativeModules } from 'react-native';
import 'react-native';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
