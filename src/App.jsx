import {StatusBar} from 'react-native';
import React from 'react';
import RootNavigation from './navigators/RootNavigation';
import {COLORS} from './theme';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={COLORS.primaryOrangeHex}
      />
      <RootNavigation />
    </>
  );
}
