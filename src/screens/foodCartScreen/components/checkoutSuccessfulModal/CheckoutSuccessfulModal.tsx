import {TouchableOpacity, View} from 'react-native';
import {CheckoutSuccessfulModalPropTypes} from './CheckoutSuccessfulModalPropTypes';
import {useAppTheme} from '../../../../theme/AppTheme';
import {checkoutSuccessfulModalStyles} from '../../styles/CheckoutSuccessfulModal.styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  OtherAppColorsDarkTheme,
  OtherAppColorsLightTheme,
} from '../../../../theme/OtherAppColors';
import {Text} from 'react-native';
import {StringConstants} from '../../../../utils/StringConstants';

export const CheckoutSuccessfulModal = ({
  totalAmount,
  totalItemCount,
  totalQuantityOfItems,
  onOkayButtonClicked,
}: CheckoutSuccessfulModalPropTypes): JSX.Element => {
  const appTheme = useAppTheme();
  const checkoutSuccessfulModalStylesToUse =
    checkoutSuccessfulModalStyles(appTheme);
  return (
    <View style={checkoutSuccessfulModalStylesToUse.container}>
      <View style={checkoutSuccessfulModalStylesToUse.mainContentContainer}>
        {/* Green success icon */}
        <Ionicon
          name="checkmark-circle-outline"
          size={48}
          color={
            appTheme.dark
              ? OtherAppColorsDarkTheme.vegIconColor
              : OtherAppColorsLightTheme.vegIconColor
          }
        />

        {/* Order successful text */}
        <Text
          style={checkoutSuccessfulModalStylesToUse.orderSuccessfulTextStyle}>
          Order Successful
        </Text>

        {/* Total Items */}
        <Text
          style={checkoutSuccessfulModalStylesToUse.totalAmountTextTitletStyle}>
          Total Items: {totalItemCount}
        </Text>

        {/* Total Qty Items */}
        <Text
          style={checkoutSuccessfulModalStylesToUse.totalAmountTextTitletStyle}>
          Total Quantity: {totalQuantityOfItems}
        </Text>

        {/* Total title */}
        <Text
          style={checkoutSuccessfulModalStylesToUse.totalAmountTextTitletStyle}>
          Total
        </Text>

        {/* Total Amount Value */}
        <Text
          style={
            checkoutSuccessfulModalStylesToUse.totalAmountTextContentStyle
          }>
          {`${StringConstants.rsSymbol}${totalAmount}`}
        </Text>

        {/* Okay Button */}
        <TouchableOpacity
          style={checkoutSuccessfulModalStylesToUse.btnOkayContainer}
          onPress={onOkayButtonClicked}>
          <Text style={checkoutSuccessfulModalStylesToUse.btnOkayTextStyle}>
            Okay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
