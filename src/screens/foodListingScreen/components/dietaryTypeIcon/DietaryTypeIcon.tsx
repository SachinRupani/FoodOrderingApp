import {View} from 'react-native';
import {DietaryTypeIconPropsType} from './DietaryTypeIconPropsType';
import {dietaryTypeIconStyles} from '../../styles/DietaryTypeIcon.styles';
import {useTheme} from '@react-navigation/native';

/**
 * Dietary type indicator icon (Veg / Non-Veg)
 */
export const DietaryTypeIcon = ({dietaryType}: DietaryTypeIconPropsType) => {
  const theme = useTheme();
  const dietaryTypeStylesToUse = dietaryTypeIconStyles(theme, dietaryType);
  return (
    <View style={dietaryTypeStylesToUse.container}>
      <View style={dietaryTypeStylesToUse.circle} />
    </View>
  );
};
