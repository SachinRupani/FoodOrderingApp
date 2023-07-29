import {useTheme} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {bottomBarCartViewStyles} from '../../styles/BottomBarCartView.styles';
import {BottomBarCartViewPropsType} from './BottomBarCartViewPropsType';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const BottomBarCartView = ({
  onViewClick,
  numberOfFoodItemsInCart,
}: BottomBarCartViewPropsType): JSX.Element => {
  const appTheme = useTheme();
  const bottomBarCartViewStylesToUse = bottomBarCartViewStyles(appTheme);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={bottomBarCartViewStylesToUse.container}
      onPress={onViewClick}>
      {/* Text in bottom bar */}
      <Text style={bottomBarCartViewStylesToUse.textStyle}>
        Go to cart {`(${numberOfFoodItemsInCart})`}
      </Text>

      {/* Icon in bottom bar */}
      <Ionicon
        style={bottomBarCartViewStylesToUse.iconStyle}
        size={20}
        color={'#ffffff'}
        name="arrow-forward"
      />
    </TouchableOpacity>
  );
};
