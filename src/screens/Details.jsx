import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import GlobalLayout from '../components/GlobalLayout';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme';
import HeaderBack from '../components/HeaderBack';
import CustomIcon from '../utils/CustomIcon';
import {BlurView} from '@react-native-community/blur';
const {width} = Dimensions.get('screen');

export default function Details(props) {
  const {
    imagelink_portrait,
    name,
    special_ingredient,
    type,
    ingredients,
    roasted,
    average_rating,
    ratings_count,
    description,
  } = props.route.params.item;
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={imagelink_portrait}
        resizeMode="contain"
        style={styles.imgContainer}>
        <HeaderBack onPressFavourite={() => {}} />
        {/* <View
          style={{
            padding: StatusBar.currentHeight * 2,
            backgroundColor: 'red',
          }}>
          <BlurView blurAmount={10} style={styles.blurStyle}></BlurView>
        </View> */}
        <View style={styles.infoContainer}>
          {/* <BlurView blurAmount={10} style={styles.blurStyle}> */}
          <View style={styles.flexBetween}>
            <View style={{gap: -8, flex: 1.4}}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.withIngredientsText}>
                {special_ingredient}
              </Text>
            </View>
            <View style={{...styles.flexStart, gap: 10, flex: 1}}>
              <View style={styles.roastedContainer}>
                <CustomIcon
                  name={'bean'}
                  size={FONTSIZE.size_18}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.generalText}>{type}</Text>
              </View>
              <View style={styles.roastedContainer}>
                <CustomIcon
                  name={'bean'}
                  size={FONTSIZE.size_18}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.generalText}>{ingredients}</Text>
              </View>
            </View>
          </View>
          <View style={styles.flexBetween}>
            <View style={{...styles.flexStart, gap: 10, flex: 1.4}}>
              <CustomIcon
                name={'star'}
                size={FONTSIZE.size_14}
                color={COLORS.primaryOrangeHex}
              />
              <Text style={styles.nameText}>{average_rating}</Text>
              <Text style={styles.withIngredientsText}>({ratings_count})</Text>
            </View>
            <View style={styles.roastedContainer}>
              <Text style={styles.generalText}>{roasted}</Text>
            </View>
          </View>
          {/* </BlurView> */}
        </View>
      </ImageBackground>
      <View style={styles.sectionContainer}>
        <View style={styles.topPadding}>
          <Text style={styles.descriptionHeadText}>Description</Text>
        </View>
        <View style={styles.topPadding}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  descriptionHeadText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    lineHeight: 20,
  },
  descriptionText: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  topPadding: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight / 1.5,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingHorizontal: StatusBar.currentHeight,
  },
  imgContainer: {
    width: '100%',
    aspectRatio: 5 / 7,
    justifyContent: 'space-between',
  },
  blurStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  infoContainer: {
    position: 'relative',
    padding: StatusBar.currentHeight,
    borderTopLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryBlackRGBA,
    gap: 10,
  },
  nameText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
  },
  withIngredientsText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_thin,
    fontSize: FONTSIZE.size_12,
  },
  generalText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_10,
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roastedContainer: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    paddingVertical: StatusBar.currentHeight / 2,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
});
