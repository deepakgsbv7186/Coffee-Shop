import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme';
import CustomIcon from '../utils/CustomIcon';

export default function CoffeeCard({data}) {
  const {imagelink_square, average_rating, name, special_ingredient, prices} =
    data;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.gradientContainer}>
      <ImageBackground source={imagelink_square} style={styles.imgContainer}>
        <View style={styles.rateContainer}>
          <CustomIcon
            name={'star'}
            size={FONTSIZE.size_14}
            color={COLORS.primaryOrangeHex}
          />
          <Text style={styles.ratingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <View style={{paddingVertical: StatusBar.currentHeight / 1.5}}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.ingredientText}>{special_ingredient}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={{...styles.nameText, fontSize: FONTSIZE.size_24}}>
          <Text style={{color: COLORS.primaryOrangeHex}}>{'$ '}</Text>
          {prices[0]?.price}
        </Text>
        <TouchableOpacity style={styles.plusBtnContainer}>
          <Text style={styles.plusBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: BORDERRADIUS.radius_20,
    padding: StatusBar.currentHeight / 2,
  },
  imgContainer: {
    resizeMode: 'cover',
    width: 200,
    height: 200,
    borderRadius: BORDERRADIUS.radius_20,
    overflow: 'hidden',
    position: 'relative',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomLeftRadius: BORDERRADIUS.radius_20 * 2,
    backgroundColor: COLORS.secondaryBlackRGBA,
    position: 'absolute',
    right: 0,
    paddingHorizontal: StatusBar.currentHeight / 1.5,
    paddingVertical: StatusBar.currentHeight / 10,
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  nameText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  ingredientText: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusBtnContainer: {
    paddingHorizontal: StatusBar.currentHeight / 2,
    borderRadius: BORDERRADIUS.radius_15,
    backgroundColor: COLORS.primaryOrangeHex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBtnText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryWhiteHex,
    textAlignVertical: 'center',
  },
});
