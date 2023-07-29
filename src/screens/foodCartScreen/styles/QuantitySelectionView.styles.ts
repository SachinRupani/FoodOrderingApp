import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';

export const quantitySelectionViewStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },

    quantityTextStyle: {
      fontFamily: FontFamilyConstants.regular,
      fontSize: 16,
      marginHorizontal: 16,
      color: appTheme.colors.border,
    },
  });
