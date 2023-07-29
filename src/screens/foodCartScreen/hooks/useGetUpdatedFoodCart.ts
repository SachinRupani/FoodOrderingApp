import {useState} from 'react';
import {FoodCartType} from '../../../data/local/foodCartData/FoodCartType';
import {FoodItemInCartType} from '../../../data/local/foodCartData/FoodItemInCartType';

export const useGetUpdatedFoodCart = (foodCartDataModel: FoodCartType) => {
  const [foodCartData, setFoodCartData] = useState<FoodCartType>({
    ...foodCartDataModel,
    arrayDataFoodItemsInCart: getFilteredCartItemsWithValidQty(
      foodCartDataModel.arrayDataFoodItemsInCart,
    ),
  });

  const onQuantityUpdated = (
    updatedQuanity: number,
    foodItemInCart: FoodItemInCartType,
  ) => {
    const updatedFoodItemsInCartWithQuantity =
      foodCartData.arrayDataFoodItemsInCart.map(foodItemModel => {
        if (foodItemModel.foodItemData.id === foodItemInCart.foodItemData.id) {
          foodItemModel.quantity = updatedQuanity > 0 ? updatedQuanity : 0;
        }
        return foodItemModel;
      });

    setFoodCartData({
      taxApplicablePercentage: foodCartData.taxApplicablePercentage,
      arrayDataFoodItemsInCart: updatedFoodItemsInCartWithQuantity.filter(
        foodItemModel => foodItemModel.quantity > 0,
      ),
    });
  };

  const clearAllCartItems = () => {
    const arrayCartItems = foodCartData.arrayDataFoodItemsInCart.map(model => {
      model.quantity = 0;
      return model;
    });

    setFoodCartData({
      taxApplicablePercentage: foodCartData.taxApplicablePercentage,
      arrayDataFoodItemsInCart:
        getFilteredCartItemsWithValidQty(arrayCartItems),
    });
  };

  return {foodCartData, onQuantityUpdated, clearAllCartItems};
};

const getFilteredCartItemsWithValidQty = (
  arrayCartItems: Array<FoodItemInCartType>,
): Array<FoodItemInCartType> => {
  return arrayCartItems.filter(cartItemModel => cartItemModel.quantity > 0);
};
