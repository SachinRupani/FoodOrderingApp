import {FoodItemDataType} from '../../../data/remote/foodData/FoodItemDataType';
import {FoodItemDietType} from '../../../data/remote/foodData/FoodItemDietType';

export interface FilterAndSearchDataType {
  isResetFilterState: boolean;
  selectedDietType: FoodItemDietType | undefined;
  strSearchInputText: string;
  arrayDataFilteredFoodList: Array<FoodItemDataType>;
}
