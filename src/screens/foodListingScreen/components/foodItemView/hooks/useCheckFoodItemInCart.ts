import {useEffect, useState} from 'react';
import {FoodCartType} from '../../../../../data/local/foodCartData/FoodCartType';
import {FoodItemDataType} from '../../../../../data/remote/foodData/FoodItemDataType';

export const useCheckFoodItemInCart = (
  foodCartModel: FoodCartType,
  foodItemDataModel: FoodItemDataType,
) => {
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>();

  useEffect(() => {
    const isItemAlreadyAddedToCart =
      foodCartModel.arrayDataFoodItemsInCart.some(
        foodItemInCart =>
          foodItemInCart.foodItemData.id === foodItemDataModel.id,
      );
    console.log(
      'useEffect_isItemAlreadyAddedToCart',
      `foodItemDataModel:${foodItemDataModel.name} IsAddedToCart: ${isItemAlreadyAddedToCart}`,
    );
    setIsAddedToCart(isItemAlreadyAddedToCart);
  }, [foodCartModel]);

  return {
    isAddedToCart,
  };
};
