import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomIcon from '../utils/CustomIcon';
import {COLORS} from '../theme';

export default function BottomTab() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomIcon name="home" size={25} color={COLORS.primaryOrangeHex} />
      <Text>BottomTab</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
