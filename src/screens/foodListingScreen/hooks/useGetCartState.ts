import {useState} from 'react';
import {FoodCartType} from '../../../data/local/foodCartData/FoodCartType';
import {FoodItemDataType} from '../../../data/remote/foodData/FoodItemDataType';

export const useGetCartState = (taxPercentage: number) => {
  const [foodCartModel, setFoodCartModel] = useState<FoodCartType>({
    arrayDataFoodItemsInCart: [],
    taxApplicablePercentage: 0,
  });

  const onAddToCart = (
    foodItemDataModel: FoodItemDataType,
    selectedQuantity: number = 1,
  ) => {
    const updatedCart: FoodCartType = {
      taxApplicablePercentage: taxPercentage,
      arrayDataFoodItemsInCart: [
        ...foodCartModel.arrayDataFoodItemsInCart,
        {
          quantity: selectedQuantity,
          foodItemData: foodItemDataModel,
        },
      ],
    };
    console.log('onAddToCart_updatedCart', JSON.stringify(updatedCart));
    setFoodCartModel(updatedCart);
  };

  const onRemoveFromCart = (foodItemDataModel: FoodItemDataType) => {
    const arrayDataFoodItemsAfterItemRemoved =
      foodCartModel.arrayDataFoodItemsInCart.filter(
        foodDataModel => foodDataModel.foodItemData.id !== foodItemDataModel.id,
      );

    const updatedCart: FoodCartType = {
      taxApplicablePercentage: taxPercentage,
      arrayDataFoodItemsInCart: arrayDataFoodItemsAfterItemRemoved,
    };

    console.log('onRemoveFromCart_updatedCart', JSON.stringify(updatedCart));
    setFoodCartModel(updatedCart);
  };

  return {
    foodCartModel,
    onAddToCart,
    onRemoveFromCart,
  };
};
