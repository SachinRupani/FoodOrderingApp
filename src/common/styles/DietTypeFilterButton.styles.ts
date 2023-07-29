import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../utils/FontFamilyConstants';
import {FoodItemDietType} from '../../data/remote/foodData/FoodItemDietType';
import {getColorString} from '../../utils/DietaryTypeUtils';

export const dietTypeFilterButtonStyles = (
  appTheme: Theme,
  dietType: FoodItemDietType,
  isSelected: boolean,
) => {
  const colorToUse = getColorString(dietType, appTheme);

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      height: 32,
      minWidth: 72,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: colorToUse,
      backgroundColor: isSelected ? colorToUse : appTheme.colors.background,
      marginEnd: 12,
    },

    btnTextStyle: {
      fontFamily: FontFamilyConstants.regular,
      fontSize: 13,
      color: isSelected ? '#ffffff' : colorToUse,
    },
  });
};
