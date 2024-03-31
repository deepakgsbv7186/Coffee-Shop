import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './navigators/RootNavigation';
import {COLORS} from './theme';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
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
