import {Theme} from '@react-navigation/native';
import {FoodItemDietType} from '../data/remote/foodData/FoodItemDietType';
import {
  OtherAppColorsDarkTheme,
  OtherAppColorsLightTheme,
} from '../theme/OtherAppColors';

/**
 * Function to get the color string for the diet type
 * @param dietaryType one of the types of FoofItemDietType (veg / non-veg)
 * @param theme app theme (light / dark theme colors)
 * @returns string color hex code
 */
export const getColorString = (
  dietaryType: FoodItemDietType,
  theme: Theme,
): string => {
  // Theme based veg / non-veg colors
  const iconColorVeg = theme.dark
    ? OtherAppColorsDarkTheme.vegIconColor
    : OtherAppColorsLightTheme.vegIconColor;
  const iconColorNonVeg = theme.dark
    ? OtherAppColorsDarkTheme.nonVegIconColor
    : OtherAppColorsLightTheme.nonVegIconColor;

  // Actual color to be used for the icon based on dietary type (veg / non-veg)
  const colorToUse =
    dietaryType === FoodItemDietType.VEG ? iconColorVeg : iconColorNonVeg;

  return colorToUse;
};
