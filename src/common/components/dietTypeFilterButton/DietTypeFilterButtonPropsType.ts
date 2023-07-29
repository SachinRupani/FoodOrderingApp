import {FoodItemDietType} from '../../../data/remote/foodData/FoodItemDietType';

/**
 * Props type to be used for the component DietTypeFilterButton
 */
export type DietTypeFilterButtonPropsType = {
  dietaryType: FoodItemDietType;
  isSelected: boolean;
  onButtonClick: () => void;
};
