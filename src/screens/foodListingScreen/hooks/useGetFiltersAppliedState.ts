import {useEffect, useState} from 'react';
import {FoodItemDietType} from '../../../data/remote/foodData/FoodItemDietType';
import {FoodItemDataType} from '../../../data/remote/foodData/FoodItemDataType';
import {FilterAndSearchDataType} from '../data/FilterAndSearchDataType';

/**
 * Hook function to handle and update the filter button states
 * and return the filtered results
 * @param arrayDataFoodList array of FoodItemDataType
 * @returns state data of selections and filter satisfied array of food items(FoodItemDataType)
 */
export const useGetFiltersAppliedState = (
  arrayDataFoodList: Array<FoodItemDataType>,
) => {
  const [filterAndSearchDataModel, setFilterAndSearchDataModel] =
    useState<FilterAndSearchDataType>({
      isResetFilterState: true,
      arrayDataFilteredFoodList: [],
      selectedDietType: undefined,
      strSearchInputText: '',
    });

  /**
   * Function triggered on click of diet type update
   */
  const onDietaryTypeFilterSelected = (dietType: FoodItemDietType) => {
    if (filterAndSearchDataModel.selectedDietType !== dietType) {
      const arrayResults = getFilteredArrayList(
        arrayDataFoodList,
        dietType,
        filterAndSearchDataModel.strSearchInputText,
      );

      // Update state hook
      setFilterAndSearchDataModel({
        ...filterAndSearchDataModel,
        isResetFilterState: false,
        selectedDietType: dietType,
        arrayDataFilteredFoodList: arrayResults,
      });
    }
  };

  /**
   * Function triggered on click of reset filter
   */
  const onResetFilterSelected = () => {
    // Update the state hook
    setFilterAndSearchDataModel({
      arrayDataFilteredFoodList: [],
      isResetFilterState: true,
      selectedDietType: undefined,
      strSearchInputText: '',
    });
  };

  /**
   * Function triggered on search of text
   */
  const onSearchTextInput = (strSearchText: string) => {
    if (
      filterAndSearchDataModel.strSearchInputText.trim() !==
      strSearchText.trim()
    ) {
      const arrayResults = getFilteredArrayList(
        arrayDataFoodList,
        filterAndSearchDataModel.selectedDietType,
        strSearchText.trim(),
      );
      setFilterAndSearchDataModel({
        ...filterAndSearchDataModel,
        isResetFilterState: false,
        strSearchInputText: strSearchText.trim(),
        arrayDataFilteredFoodList: arrayResults,
      });
    }
  };

  return {
    filterAndSearchDataModel,
    onDietaryTypeFilterSelected,
    onResetFilterSelected,
    onSearchTextInput,
  };
};

const getFilteredArrayList = (
  arrayDataFoodList: Array<FoodItemDataType>,
  newlySelectedDietType: FoodItemDietType | undefined,
  strSearchInputText: string,
): Array<FoodItemDataType> => {
  // Filter out the results based on diet type first
  const arrayDietTypeFilteredResults =
    newlySelectedDietType !== undefined
      ? arrayDataFoodList.filter(
          ({item_type}) => item_type === newlySelectedDietType,
        )
      : arrayDataFoodList;

  // Then check for search input text and apply combined filter
  if (strSearchInputText.trim().length > 0) {
    return arrayDietTypeFilteredResults.filter(({name, category}) => {
      const strNameLowerCase = name.trim().toLowerCase();
      const strCategoryLowerCase = category?.trim()?.toLowerCase() ?? ``;
      const strInputSearchTextLowerCase = strSearchInputText
        .trim()
        .toLowerCase();
      return (
        strNameLowerCase.includes(strInputSearchTextLowerCase) ||
        strCategoryLowerCase.includes(strInputSearchTextLowerCase)
      );
    });
  }

  return arrayDietTypeFilteredResults;
};
