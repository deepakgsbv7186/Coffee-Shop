import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme';

export default function GlobalLayout({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    marginTop: StatusBar.currentHeight,
  },
});
