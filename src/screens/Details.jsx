import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme';
import HeaderBack from '../components/HeaderBack';
import CustomIcon from '../utils/CustomIcon';
import Button from '../components/Button';

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
    prices,
  } = props.route.params.item;
  const [selectedSize, setSelectedSize] = useState(prices[0]?.size);
  const [selectedPrice, setSelectedPrice] = useState(prices[0]?.price);
  const handleSelection = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={imagelink_portrait}
        resizeMode="cover"
        style={styles.imgContainer}>
        <HeaderBack onPressFavourite={() => {}} />
        <BlurView
          blurAmount={5}
          overlayColor="transparent"
          style={styles.blurStyle}>
          <View style={styles.infoContainer}>
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
                <Text style={styles.withIngredientsText}>
                  ({ratings_count})
                </Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.generalText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
      <View style={styles.sectionContainer}>
        <View style={styles.topPadding}>
          <Text style={styles.descriptionHeadText}>Size</Text>
        </View>
        <View style={styles.sizeOuterContainer}>
          {prices?.map(price => (
            <TouchableOpacity
              key={price?.size}
              onPress={() => handleSelection(price?.size, price?.price)}
              style={styles.sizeContainer(selectedSize, price.size)}>
              <Text style={styles.sizeText}>{price?.size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.topPadding}>
          <Text style={styles.descriptionHeadText}>Description</Text>
        </View>
        <View style={styles.topPadding}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.descriptionText}>Price</Text>
            <Text style={styles.priceText}>
              {'$ '}
              <Text style={{color: COLORS.primaryWhiteHex}}>
                {selectedPrice}
              </Text>
            </Text>
          </View>
          <Button title={'Add to Cart'} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  priceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: StatusBar.currentHeight,
    paddingVertical: StatusBar.currentHeight,
  },
  sizeText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
  sizeContainer: (selectedSize, optionSize) => ({
    backgroundColor: COLORS.primaryDarkGreyHex,
    paddingVertical: StatusBar.currentHeight / 3,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flex: 1,
    borderColor:
      selectedSize === optionSize
        ? COLORS.primaryOrangeHex
        : COLORS.primaryBlackHex,
    borderWidth: 1,
  }),
  sizeOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: StatusBar.currentHeight / 1.5,
  },
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
    position: 'relative',
  },
  imgContainer: {
    width: '100%',
    aspectRatio: 5 / 6,
    justifyContent: 'space-between',
  },
  blurStyle: {
    position: 'absolute',
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
