import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme';

export default function PillButtons() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryList = [
    {id: 1, categoryName: 'All'},
    {id: 2, categoryName: 'Cappuccino'},
    {id: 3, categoryName: 'Espresso'},
    {id: 4, categoryName: 'Americano'},
    {id: 5, categoryName: 'Macchilato'},
  ];

  const handleActiveChange = categoryName => {
    setSelectedCategory(categoryName);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {categoryList.map((category, index) => (
        <TouchableOpacity
          key={category.id}
          style={styles.pillContainer}
          onPress={() => handleActiveChange(category.categoryName)}>
          <Text
            style={styles.pillText(selectedCategory, category.categoryName)}>
            {category.categoryName}
          </Text>
          {selectedCategory === category.categoryName && (
            <View
              style={styles.acitveLine(category.categoryName.length, index)}
            />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: StatusBar.currentHeight,
    gap: 20,
  },
  pillContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillText: (selected_name, _name) => ({
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color:
      selected_name === _name
        ? COLORS.primaryOrangeHex
        : COLORS.primaryLightGreyHex,
  }),
  acitveLine: (_name, index) => ({
    width: _name * _name - 1,
    height: SPACING.space_10 / 2,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_10,
  }),
});
