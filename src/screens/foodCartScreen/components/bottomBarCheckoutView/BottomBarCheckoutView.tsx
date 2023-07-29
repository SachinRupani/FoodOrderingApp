import {useTheme} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {bottomBarCheckoutViewStyles} from '../../styles/BottomBarCheckoutView.styles';
import {BottomBarCheckoutViewProps} from './BottomBarCheckoutViewPropTypes';
import {StringConstants} from '../../../../utils/StringConstants';

export const BottomBarCheckoutView = ({
  calculatedAmountData,
  onCheckoutButtonClickEvent,
  taxPercentage,
}: BottomBarCheckoutViewProps): JSX.Element => {
  const appTheme = useTheme();
  const bottomBarCheckoutViewStylesToUse =
    bottomBarCheckoutViewStyles(appTheme);

  // render checkout button
  const _renderCheckoutButton = () => {
    return (
      <TouchableOpacity
        onPress={onCheckoutButtonClickEvent}
        style={bottomBarCheckoutViewStylesToUse.btnCheckoutContainer}>
        <Text style={bottomBarCheckoutViewStylesToUse.btnCheckoutTextStyle}>
          Checkout
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={bottomBarCheckoutViewStylesToUse.container}>
      <View style={bottomBarCheckoutViewStylesToUse.calculationContainer}>
        {/* Amount Before Tax */}
        <Text style={bottomBarCheckoutViewStylesToUse.subTextTitleTextStyle}>
          Amount before tax:{` ${StringConstants.rsSymbol}`}
          <Text
            style={bottomBarCheckoutViewStylesToUse.subTextContentTextStyle}>
            {calculatedAmountData.totalAmountBeforeTaxAdded}
          </Text>
        </Text>

        {/* Tax Amount */}
        <Text style={bottomBarCheckoutViewStylesToUse.subTextTitleTextStyle}>
          Tax {`(${taxPercentage}%)`}:{` ${StringConstants.rsSymbol}`}
          <Text
            style={bottomBarCheckoutViewStylesToUse.subTextContentTextStyle}>
            {calculatedAmountData.taxAmount}
          </Text>
        </Text>

        {/* Total Payable Amount (After tax added) */}
        <Text style={bottomBarCheckoutViewStylesToUse.mainTextTitleTextStyle}>
          Total:{` ${StringConstants.rsSymbol}`}
          <Text
            style={bottomBarCheckoutViewStylesToUse.mainTextContentTextStyle}>
            {calculatedAmountData.totalAmountAfterTaxAdded}
          </Text>
        </Text>
      </View>
      {_renderCheckoutButton()}
    </View>
  );
};
