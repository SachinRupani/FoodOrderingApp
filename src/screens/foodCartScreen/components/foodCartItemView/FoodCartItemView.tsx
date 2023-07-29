import {View, Text} from 'react-native';
import {FoodCartItemViewPropsType} from './FoodCartItemViewPropsType';
import {useTheme} from '@react-navigation/native';
import {foodCartItemViewStyles} from '../../styles/FoodCartItemView.styles';
import FastImage from 'react-native-fast-image';
import {DietaryTypeIcon} from '../../../foodListingScreen/components/dietaryTypeIcon/DietaryTypeIcon';
import {StringConstants} from '../../../../utils/StringConstants';
import {QuantitySelectionView} from '../quantitySelectionView/QuantitySelectionView';

export const FoodCartItemView = ({
  foodItemInCart,
  onQuantityUpdated,
}: FoodCartItemViewPropsType): JSX.Element => {
  const appTheme = useTheme();
  const foodCartItemViewStylesToUse = foodCartItemViewStyles(appTheme);

  const strImageUrl = foodItemInCart.foodItemData.image?.trim() ?? ``;

  return (
    <View style={foodCartItemViewStylesToUse.cardContainer}>
      <View>
        {/* Food Image */}
        <FastImage
          style={foodCartItemViewStylesToUse.imageStyle}
          source={
            strImageUrl.length > 0
              ? {uri: strImageUrl}
              : require('../../../../../assets/images/img_default.jpeg')
          }
          resizeMode={'cover'}
        />
      </View>

      {/* Food item title, description etc */}
      <View style={foodCartItemViewStylesToUse.mainContentContainer}>
        {/* Diet type (Veg / Non-Veg) and Title Container */}
        <View style={foodCartItemViewStylesToUse.titleAndDietIconContainer}>
          {/* Food Title */}
          <Text style={foodCartItemViewStylesToUse.titleTextStyle}>
            {foodItemInCart.foodItemData.name}
          </Text>

          {/* Dietary Type Icon -  veg/non-veg */}
          <DietaryTypeIcon
            dietaryType={foodItemInCart.foodItemData.item_type}
          />
        </View>

        {/* Total (price * quantity) */}
        <Text style={foodCartItemViewStylesToUse.priceTextStyle}>
          {`${StringConstants.rsSymbol}${foodItemInCart.foodItemData.price}`}
        </Text>

        {/* Quantity selection view */}
        <View
          style={foodCartItemViewStylesToUse.quantitySelectionViewContainer}>
          <QuantitySelectionView
            itemQuantity={foodItemInCart.quantity}
            onQuantityUpdated={onQuantityUpdated}
          />
        </View>
      </View>
    </View>
  );
};
