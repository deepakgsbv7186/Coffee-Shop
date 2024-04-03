import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, SPACING} from '../theme';
import CustomIcon from '../utils/CustomIcon';

export default function GradientBGIcon({name, color, size}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.gradientContainer}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.primaryLightGreyHex,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradientContainer: {
    padding: SPACING.space_12 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
