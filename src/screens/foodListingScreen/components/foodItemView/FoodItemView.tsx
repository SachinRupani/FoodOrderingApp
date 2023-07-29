import {Button, Text, View} from 'react-native';
import {foodItemViewStyles} from '../../styles/FoodItemView.styles';
import {FoodItemViewPropsType} from './FoodItemViewPropsType';
import {useTheme} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {DietaryTypeIcon} from '../dietaryTypeIcon/DietaryTypeIcon';
import {StringConstants} from '../../../../utils/StringConstants';
import {OutlineButton} from '../../../../common/components/outlineButton/OutlineButton';
import {useCheckFoodItemInCart} from './hooks/useCheckFoodItemInCart';

/**
 * Function which returns the Item view of Food list
 * @returns JSX element (React component)
 */
export const FoodItemView = ({
  foodItemDataModel,
  currentFoodCart,
  onAddToCartEvent,
  onRemovedFromCartEvent,
}: FoodItemViewPropsType): JSX.Element => {
  const appTheme = useTheme();
  const foodItemViewStylesToUse = foodItemViewStyles(appTheme);

  const {isAddedToCart} = useCheckFoodItemInCart(
    currentFoodCart,
    foodItemDataModel,
  );

  const strImageUrl = foodItemDataModel.image?.trim() ?? '';
  return (
    <View style={foodItemViewStylesToUse.cardContainer}>
      <View>
        {/* Food Image */}
        <FastImage
          style={foodItemViewStylesToUse.imageStyle}
          source={
            strImageUrl.length > 0
              ? {uri: strImageUrl}
              : require('../../../../../assets/images/img_default.jpeg')
          }
          resizeMode={'cover'}
        />

        {/* Add to cart / Remove from cart button container */}
        <View style={foodItemViewStylesToUse.buttonAddContainerStyle}>
          {/* Add to cart */}
          {!isAddedToCart && (
            <OutlineButton
              titleText="Add"
              outlineAndTextColorString={appTheme.colors.primary}
              onButtonClick={() => {
                onAddToCartEvent(foodItemDataModel);
              }}
            />
          )}

          {/* Remove from cart */}
          {isAddedToCart && (
            <OutlineButton
              titleText="Remove"
              outlineAndTextColorString={appTheme.colors.border}
              onButtonClick={() => {
                onRemovedFromCartEvent(foodItemDataModel);
              }}
            />
          )}
        </View>
      </View>

      {/* Food item title, description etc */}
      <View style={foodItemViewStylesToUse.mainContentContainer}>
        {/* Diet type (Veg / Non-Veg) and Title Container */}
        <View style={foodItemViewStylesToUse.titleAndDietIconContainer}>
          {/* Food Title */}
          <Text style={foodItemViewStylesToUse.titleTextStyle}>
            {foodItemDataModel.name}
          </Text>

          {/* Dietary Type Icon -  veg/non-veg */}
          <DietaryTypeIcon dietaryType={foodItemDataModel.item_type} />
        </View>

        {/* Food Price */}
        <Text style={foodItemViewStylesToUse.priceTextStyle}>
          {`${StringConstants.rsSymbol}${foodItemDataModel.price}`}
        </Text>

        {/* Food Description */}
        <Text style={foodItemViewStylesToUse.descriptionTextStyle}>
          {foodItemDataModel.description}
        </Text>

        {/* Food Category */}
        <Text style={foodItemViewStylesToUse.descriptionTextStyle}>
          Category:{' '}
          <Text style={foodItemViewStylesToUse.categoryValueTextStyle}>
            {' '}
            {foodItemDataModel.category?.trim() ?? ``}{' '}
          </Text>
        </Text>
      </View>
    </View>
  );
};
