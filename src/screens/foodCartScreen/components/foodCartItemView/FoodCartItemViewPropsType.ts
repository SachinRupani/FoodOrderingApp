import {FoodItemInCartType} from '../../../../data/local/foodCartData/FoodItemInCartType';

export type FoodCartItemViewPropsType = {
  foodItemInCart: FoodItemInCartType;
  onQuantityUpdated: (updatedQuantity: number) => void;
};
