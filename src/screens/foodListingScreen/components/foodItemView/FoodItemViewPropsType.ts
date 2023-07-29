import {FoodCartType} from '../../../../data/local/foodCartData/FoodCartType';
import {FoodItemDataType} from '../../../../data/remote/foodData/FoodItemDataType';

/**
 * Props type to be used for the component FoodItemView
 */
export type FoodItemViewPropsType = {
  foodItemDataModel: FoodItemDataType;
  currentFoodCart: FoodCartType;
  onAddToCartEvent: (foodItemDataModel: FoodItemDataType) => void;
  onRemovedFromCartEvent: (foodItemDataModel: FoodItemDataType) => void;
};
