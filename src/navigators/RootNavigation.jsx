import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payments from '../screens/Payments';
import Details from '../screens/Details';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Payments" component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
