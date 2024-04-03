import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBGIcon from './GradientBGIcon';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme';

export default function HeaderBack({title, navigation, onPressFavourite}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <GradientBGIcon
          name={'left'}
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_20}
        />
      </Pressable>
      {title && (
        <>
          <Text style={styles.headerText}>{title}</Text>
          <View style={{width: SPACING.space_36}} />
        </>
      )}
      {onPressFavourite && (
        <Pressable onPress={onPressFavourite}>
          <GradientBGIcon
            name={'star'}
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_20}
          />
        </Pressable>
      )}
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
