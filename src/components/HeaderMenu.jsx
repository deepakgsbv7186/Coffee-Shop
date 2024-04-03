import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBGIcon from './GradientBGIcon';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme';
import ProfileIcon from './ProfileIcon';

export default function HeaderMenu({title = ''}) {
  return (
    <View style={styles.container}>
      <GradientBGIcon
        name={'menu'}
        color={COLORS.primaryOrangeHex}
        size={FONTSIZE.size_20}
      />
      {title && <Text style={styles.headerText}>{title}</Text>}
      <ProfileIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: StatusBar.currentHeight,
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
});
