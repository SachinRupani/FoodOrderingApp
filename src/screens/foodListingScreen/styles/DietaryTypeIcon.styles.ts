import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FoodItemDietType} from '../../../data/remote/foodData/FoodItemDietType';
import {getColorString} from '../../../utils/DietaryTypeUtils';

export const dietaryTypeIconStyles = (
  theme: Theme,
  dietaryType: FoodItemDietType,
) => {
  // Get icon color string (hex)
  const colorToUse = getColorString(dietaryType, theme);

  return StyleSheet.create({
    container: {
      width: 16,
      height: 16,
      borderRadius: 4,
      borderWidth: 1.5,
      borderColor: colorToUse,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 4,
    },

    circle: {
      width: 6,
      height: 6,
      borderRadius: 4,
      backgroundColor: colorToUse,
    },
  });
};
