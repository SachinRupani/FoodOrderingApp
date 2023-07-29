import {useEffect, useState} from 'react';
import {FoodCartType} from '../../../data/local/foodCartData/FoodCartType';
import {CalculatedAmountDataType} from '../data/CalculatedAmountDataType';

export const useGetAmount = (foodCartData: FoodCartType) => {
  const [calculatedAmountData, setCaluclatedAmountData] =
    useState<CalculatedAmountDataType>({
      taxAmount: 0,
      totalAmountAfterTaxAdded: 0,
      totalAmountBeforeTaxAdded: 0,
    });

  useEffect(() => {
    const arrayDataCartItems = foodCartData.arrayDataFoodItemsInCart;

    const calculatedTotalAmountBeforeTax: number = Math.round(
      arrayDataCartItems.reduce(function (acc, dataModel) {
        return acc + dataModel.foodItemData.price * dataModel.quantity;
      }, 0),
    );

    const calculatedTaxAmount = Math.round(
      calculatedTotalAmountBeforeTax *
        (foodCartData.taxApplicablePercentage / 100),
    );

    const calculatedTotalAmountAfterTax = Math.round(
      calculatedTotalAmountBeforeTax + calculatedTaxAmount,
    );

    setCaluclatedAmountData({
      taxAmount: calculatedTaxAmount,
      totalAmountBeforeTaxAdded: calculatedTotalAmountBeforeTax,
      totalAmountAfterTaxAdded: calculatedTotalAmountAfterTax,
    });
  }, [foodCartData]);

  return {
    calculatedAmountData,
  };
};
