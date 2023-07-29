import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {FlatList, Modal, Text, View} from 'react-native';
import {foodCartScreenStyles} from './styles/FoodCartScreen.styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {FoodCartItemView} from './components/foodCartItemView/FoodCartItemView';
import {FoodCartType} from '../../data/local/foodCartData/FoodCartType';
import {BottomBarCheckoutView} from './components/bottomBarCheckoutView/BottomBarCheckoutView';
import {useGetAmount} from './hooks/useGetAmount';
import {useGetUpdatedFoodCart} from './hooks/useGetUpdatedFoodCart';
import {EmptyData} from '../../common/components/emptyData/EmptyData';
import {useState} from 'react';
import {CheckoutSuccessfulModal} from './components/checkoutSuccessfulModal/CheckoutSuccessfulModal';

export const FoodCartScreen = (): JSX.Element => {
  const appTheme = useTheme();
  const foodCartScreenStylesToUse = foodCartScreenStyles(appTheme);

  const route = useRoute();
  const navigation = useNavigation();

  // Bring the cart items in navigation params
  const incomingFoodCartModel: FoodCartType = route.params?.foodCart ?? {
    arrayDataFoodItemsInCart: [],
    taxApplicablePercentage: 0,
  };

  // State hook to get the updated cart
  const {foodCartData, onQuantityUpdated, clearAllCartItems} =
    useGetUpdatedFoodCart(incomingFoodCartModel);

  // State hook to get the amounts
  const {calculatedAmountData} = useGetAmount(foodCartData);

  // checkout success modal
  const [isCheckoutSuccessModalVisible, setIsCheckoutSuccessModalVisible] =
    useState<boolean>(false);

  // Render List Header component
  const _renderListHeader = () => {
    return (
      <View style={foodCartScreenStylesToUse.listHeaderContainerStyle}>
        {/* Back Icon */}
        <Ionicon
          size={24}
          color={appTheme.colors.text}
          name="arrow-back"
          onPress={() => navigation.goBack()}
        />

        {/* Header Text */}
        <Text style={foodCartScreenStylesToUse.listHeaderTextStyle}>
          Your Cart
        </Text>
      </View>
    );
  };

  return (
    <View style={foodCartScreenStylesToUse.container}>
      {/* List of cart items */}
      <FlatList
        style={foodCartScreenStylesToUse.listContainer}
        ListHeaderComponent={_renderListHeader()}
        data={foodCartData.arrayDataFoodItemsInCart}
        renderItem={({item, index}) => (
          <FoodCartItemView
            foodItemInCart={item}
            onQuantityUpdated={(updatedQuantity: number) => {
              onQuantityUpdated(updatedQuantity, item);
            }}
          />
        )}
      />

      {/* Bottom Bar Checkout View (Only displayed when cart items are not empty) */}
      {foodCartData.arrayDataFoodItemsInCart.length > 0 ? (
        <BottomBarCheckoutView
          calculatedAmountData={calculatedAmountData}
          onCheckoutButtonClickEvent={() =>
            setIsCheckoutSuccessModalVisible(true)
          }
          taxPercentage={foodCartData.taxApplicablePercentage}
        />
      ) : (
        // Empty data in indication for cart
        <View style={foodCartScreenStylesToUse.emptyDataContainer}>
          <EmptyData iconName="cart-outline" strMessage="Your cart is empty" />
        </View>
      )}

      {/* Checkout success modal */}
      <Modal transparent={true} visible={isCheckoutSuccessModalVisible}>
        <CheckoutSuccessfulModal
          totalAmount={calculatedAmountData.totalAmountAfterTaxAdded}
          totalItemCount={foodCartData.arrayDataFoodItemsInCart.length}
          totalQuantityOfItems={foodCartData.arrayDataFoodItemsInCart.reduce(
            function (acc, dataModel) {
              return acc + dataModel.quantity;
            },
            0,
          )}
          onOkayButtonClicked={() => {
            setIsCheckoutSuccessModalVisible(false);
            clearAllCartItems();
          }}
        />
      </Modal>
    </View>
  );
};
