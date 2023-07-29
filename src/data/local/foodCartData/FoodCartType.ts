import {FoodItemInCartType} from './FoodItemInCartType';

export interface FoodCartType {
  taxApplicablePercentage: number;
  arrayDataFoodItemsInCart: Array<FoodItemInCartType>;
}
