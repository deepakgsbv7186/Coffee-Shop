import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalLayout from '../components/GlobalLayout';
import {COLORS} from '../theme';

export default function Favorites() {
  return (
    <GlobalLayout>
      <Text style={{color: COLORS.primaryWhiteHex}}>Favorites Screen</Text>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({});
