import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../utils/FontFamilyConstants';

export const emptyDataStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appTheme.colors.background,
      overflow: 'hidden',
    },

    textStyle: {
      marginTop: 12,
      fontFamily: FontFamilyConstants.regular,
      fontSize: 14,
      color: appTheme.colors.text,
    },
  });
