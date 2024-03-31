import {StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../utils/CustomIcon';
import {COLORS} from '../theme';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import OrderHistory from '../screens/OrderHistory';

const Bottom = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          backgroundColor: COLORS.primaryBlackRGBA,
          height: StatusBar.currentHeight * 2 + 10,
        },
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          />
        ),
      }}>
      <Bottom.Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="home"
              size={24}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Bottom.Screen
        component={Favorites}
        name="Favorites"
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="like"
              size={24}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Bottom.Screen
        component={Cart}
        name="Cart"
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="cart"
              size={24}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Bottom.Screen
        component={OrderHistory}
        name="OrderHistory"
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
              name="bell"
              size={24}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
