import {StyleSheet, View} from 'react-native';
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
        colors={[COLORS.primaryLightGreyHex, COLORS.primaryDarkGreyHex]}
        style={styles.gradientContainer}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDERRADIUS.radius_10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradientContainer: {
    padding: SPACING.space_16 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
