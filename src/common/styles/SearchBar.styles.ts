import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../utils/FontFamilyConstants';

export const searchBarStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 24,
      borderWidth: 2,
      borderColor: appTheme.colors.border,
      paddingHorizontal: 16,
    },

    searchIconStyle: {
      marginEnd: 8,
    },

    inputTextStyle: {
      flex: 1,
      fontSize: 14,
      fontFamily: FontFamilyConstants.medium,
      color: appTheme.colors.text,
    },
  });
