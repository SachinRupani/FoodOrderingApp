import {TouchableOpacity, Text} from 'react-native';
import {DietTypeFilterButtonPropsType} from './DietTypeFilterButtonPropsType';
import {useTheme} from '@react-navigation/native';
import {dietTypeFilterButtonStyles} from '../../styles/DietTypeFilterButton.styles';
import {FoodItemDietType} from '../../../data/remote/foodData/FoodItemDietType';

export const DietTypeFilterButton = ({
  dietaryType,
  isSelected,
  onButtonClick,
}: DietTypeFilterButtonPropsType): JSX.Element => {
  const appTheme = useTheme();
  const dietTypeFilterButtonStylesToUse = dietTypeFilterButtonStyles(
    appTheme,
    dietaryType,
    isSelected,
  );

  return (
    <TouchableOpacity
      style={dietTypeFilterButtonStylesToUse.container}
      activeOpacity={0.5}
      onPress={onButtonClick}>
      <Text style={dietTypeFilterButtonStylesToUse.btnTextStyle}>
        {dietaryType === FoodItemDietType.VEG ? 'Veg' : 'Non-Veg'}
      </Text>
    </TouchableOpacity>
  );
};
