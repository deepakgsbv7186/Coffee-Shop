import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme';

export default function Button({title, onPress, props}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight / 1.5,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
});
