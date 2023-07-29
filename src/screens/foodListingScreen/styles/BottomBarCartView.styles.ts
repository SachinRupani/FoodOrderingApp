import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';

export const bottomBarCartViewStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      borderTopStartRadius: 16,
      borderTopEndRadius: 16,
    },

    textStyle: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily: FontFamilyConstants.medium,
    },

    iconStyle: {
      marginStart: 8,
    },
  });
};
