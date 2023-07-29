import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {quantitySelectionViewStyles} from '../../styles/QuantitySelectionView.styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {QuantitySelectionPropsType} from './QuantitySelectionViewPropTypes';

export const QuantitySelectionView = ({
  itemQuantity,
  onQuantityUpdated,
}: QuantitySelectionPropsType): JSX.Element => {
  const appTheme = useTheme();
  const quantitySelectionViewStylesToUse =
    quantitySelectionViewStyles(appTheme);

  const _renderPlusMinusIcon = (plusMinusQtyIndicator: 'plus' | 'minus') => {
    return (
      <Ionicon
        name={
          plusMinusQtyIndicator === 'plus'
            ? 'add-circle-outline'
            : 'remove-circle-outline'
        }
        size={32}
        color={appTheme.colors.border}
        onPress={() =>
          plusMinusQtyIndicator === 'plus'
            ? onQuantityUpdated(itemQuantity + 1)
            : onQuantityUpdated(itemQuantity - 1)
        }
      />
    );
  };

  return (
    <View style={quantitySelectionViewStylesToUse.container}>
      {_renderPlusMinusIcon('minus')}
      <Text style={quantitySelectionViewStylesToUse.quantityTextStyle}>
        {String(itemQuantity)}
      </Text>
      {_renderPlusMinusIcon('plus')}
    </View>
  );
};
