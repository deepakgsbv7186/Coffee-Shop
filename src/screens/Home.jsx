import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import GlobalLayout from '../components/GlobalLayout';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme';
import HeaderMenu from '../components/HeaderMenu';
import CustomIcon from '../utils/CustomIcon';
import PillButtons from '../components/PillButtons';
import CoffeeData from '../data/CoffeeData';
import CoffeeCard from '../components/CoffeeCard';
import BeansData from '../data/BeansData';

export default function Home() {
  const [coffeeList, setCoffeeList] = useState(CoffeeData);
  const [BeanList, setBeanList] = useState(BeansData);
  return (
    <GlobalLayout>
      <HeaderMenu />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: StatusBar.currentHeight * 3}}>
        <Text style={styles.tagLineText}>
          Find the best<Text>{'\ncoffee for you'}</Text>
        </Text>
        <View style={styles.searchBarContainer}>
          <CustomIcon
            name="search"
            size={FONTSIZE.size_18}
            color={COLORS.primaryLightGreyHex}
          />
          <TextInput
            placeholder="Find Your Coffee..."
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInputStyle}
          />
        </View>
        <View style={{paddingVertical: StatusBar.currentHeight / 1.5}}>
          <PillButtons />
        </View>
        <FlatList
          data={coffeeList}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={1}>
              <CoffeeCard data={item} />
            </TouchableOpacity>
          )}
        />
        <View style={styles.beansTextContainer}>
          <Text style={styles.beansText}>Coffee beans</Text>
        </View>
        <FlatList
          data={BeanList}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={1}>
              <CoffeeCard data={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  tagLineText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryWhiteHex,
    paddingHorizontal: StatusBar.currentHeight,
    paddingVertical: StatusBar.currentHeight / 2,
  },
  beansTextContainer: {
    flexDirection: 'row',
    paddingHorizontal: StatusBar.currentHeight,
    paddingVertical: StatusBar.currentHeight,
  },
  beansText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryLightGreyHex,
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: StatusBar.currentHeight,
    paddingVertical: StatusBar.currentHeight / 6,
    paddingHorizontal: StatusBar.currentHeight / 1.5,
    gap: 10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  textInputStyle: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  flatListContainer: {
    gap: SPACING.space_20,
    paddingHorizontal: StatusBar.currentHeight,
  },
});
