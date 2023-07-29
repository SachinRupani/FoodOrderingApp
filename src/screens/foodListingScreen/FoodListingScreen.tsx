import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {foodListingScreenStyles} from './styles/FoodListingScreen.styles';
import {useFetchFoodListApi} from './hooks/useFetchFoodListApi';
import {FoodItemView} from './components/foodItemView/FoodItemView';
import {FoodItemDataType} from '../../data/remote/foodData/FoodItemDataType';

import {useNavigation, useTheme} from '@react-navigation/native';
import {SearchBar} from '../../common/components/searchBar/SearchBar';
import {DietTypeFilterButton} from '../../common/components/dietTypeFilterButton/DietTypeFilterButton';
import {FoodItemDietType} from '../../data/remote/foodData/FoodItemDietType';
import {TouchableOpacity} from 'react-native';
import {useGetFiltersAppliedState} from './hooks/useGetFiltersAppliedState';
import {BottomBarCartView} from './components/bottomBarCartView/BottomBarCartView';
import {useGetCartState} from './hooks/useGetCartState';
import {EmptyData} from '../../common/components/emptyData/EmptyData';
import {foodCartScreen} from '../../routes/ScreenNavRouteData';

export const FoodListingScreen = (): JSX.Element => {
  const appTheme = useTheme();
  const foodListingScreenStylesToUse = foodListingScreenStyles(appTheme);

  // navigation for navigating to cart screen
  const navigation = useNavigation();

  // Different states (API call hook)
  const {isFoodListLoading, foodListError, arrayDataFoodList, applicableTax} =
    useFetchFoodListApi();

  // Different states (filters logic hook)
  const {
    filterAndSearchDataModel,
    onDietaryTypeFilterSelected,
    onResetFilterSelected,
    onSearchTextInput,
  } = useGetFiltersAppliedState(arrayDataFoodList);

  const {foodCartModel, onAddToCart, onRemoveFromCart} = useGetCartState(
    applicableTax.value,
  );

  /**
   * Function responsible to render the main data content
   * @returns JSX Element (react component)
   */
  const _renderMainContent = (): JSX.Element => {
    const arrayDataFoodListToConsider =
      filterAndSearchDataModel.isResetFilterState
        ? arrayDataFoodList
        : filterAndSearchDataModel.arrayDataFilteredFoodList;

    return (
      <>
        {/* Container Search Bar & Filter Buttons (Veg / Non-Veg) */}
        <View style={foodListingScreenStylesToUse.searchBarContainer}>
          {/* Search Bar */}
          <SearchBar
            shouldEmptyTextOnReset={filterAndSearchDataModel.isResetFilterState}
            onSearchTextChange={onSearchTextInput}
            placeholderText="Search item by name/category"
          />

          {/* Filter Buttons - Veg / Non-Veg and Reset Filter */}
          <View style={foodListingScreenStylesToUse.dietTypeFilterContainer}>
            {/* Veg and Non Veg filter Buttons */}
            <View
              style={foodListingScreenStylesToUse.dietTypeFilterSubContainer}>
              {/* Veg Filter Button */}
              <DietTypeFilterButton
                dietaryType={FoodItemDietType.VEG}
                isSelected={
                  filterAndSearchDataModel.selectedDietType ===
                  FoodItemDietType.VEG
                }
                onButtonClick={() => {
                  onDietaryTypeFilterSelected(FoodItemDietType.VEG);
                }}
              />

              {/* Non-Veg Filter Button */}
              <DietTypeFilterButton
                dietaryType={FoodItemDietType.NON_VEG}
                isSelected={
                  filterAndSearchDataModel.selectedDietType ===
                  FoodItemDietType.NON_VEG
                }
                onButtonClick={() => {
                  onDietaryTypeFilterSelected(FoodItemDietType.NON_VEG);
                }}
              />
            </View>

            {/* Reset Filter Button */}
            {!filterAndSearchDataModel.isResetFilterState && (
              <TouchableOpacity onPress={onResetFilterSelected}>
                <Text style={foodListingScreenStylesToUse.resetFilterTextStyle}>
                  Reset Filter
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* List of food items / Empty Data component */}
        {arrayDataFoodListToConsider.length > 0 ? (
          // List
          <FlatList
            style={foodListingScreenStylesToUse.flatListFoodItemsStyle}
            data={arrayDataFoodListToConsider}
            keyExtractor={({id}) => String(id)}
            renderItem={({item, index}) => (
              <FoodItemView
                foodItemDataModel={item}
                currentFoodCart={foodCartModel}
                onAddToCartEvent={(foodDataModelToAdd: FoodItemDataType) => {
                  onAddToCart(foodDataModelToAdd);
                }}
                onRemovedFromCartEvent={(
                  foodDataModelToRemove: FoodItemDataType,
                ) => {
                  onRemoveFromCart(foodDataModelToRemove);
                }}
                key={String(item.id)}
              />
            )}
            ListFooterComponent={
              <View style={foodListingScreenStylesToUse.footerContentStyle} />
            }
          />
        ) : (
          // Empty data component to display when food list is empty
          <EmptyData
            iconName="filter-circle-outline"
            strMessage="Filtered results not found"
          />
        )}

        {/* Bottom Bar Cart View */}
        {foodCartModel.arrayDataFoodItemsInCart.length > 0 && (
          <BottomBarCartView
            numberOfFoodItemsInCart={
              foodCartModel.arrayDataFoodItemsInCart.length
            }
            onViewClick={() => {
              navigation.navigate(foodCartScreen.routeName, {
                foodCart: foodCartModel,
              });
            }}
          />
        )}
      </>
    );
  };

  /**
   * Function responsible to render loading indication
   * @returns JSX Element (react component loading indication view)
   */
  const _renderLoadingIndicator = (): JSX.Element => {
    return (
      <View style={foodListingScreenStylesToUse.loadingIndicatorContainer}>
        <ActivityIndicator color={appTheme.colors.primary} size={'large'} />
      </View>
    );
  };

  /**
   * Funtion to render error
   */
  const _renderFoodListError = (): JSX.Element => {
    return (
      <EmptyData
        iconName="warning-outline"
        strMessage="Some API error occurred"
      />
    );
  };

  return (
    <SafeAreaView style={foodListingScreenStylesToUse.container}>
      {arrayDataFoodList.length > 0
        ? _renderMainContent()
        : isFoodListLoading
        ? _renderLoadingIndicator()
        : foodListError
        ? _renderFoodListError()
        : null}
    </SafeAreaView>
  );
};
