import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, SPACING} from '../theme';
import {IMAGES} from '../assets/app_images';

export default function ProfileIcon() {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.avatar} style={styles.imageStyle} />
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
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
