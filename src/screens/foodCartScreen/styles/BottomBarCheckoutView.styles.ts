import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';

export const bottomBarCheckoutViewStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: appTheme.colors.card,
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignItems: 'center',
      overflow: 'hidden',
      borderTopStartRadius: 16,
      borderTopEndRadius: 16,
    },

    calculationContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    btnCheckoutContainer: {
      width: 120,
      height: 44,
      borderRadius: 22,
      backgroundColor: appTheme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },

    btnCheckoutTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: '#ffffff',
      fontSize: 16,
    },

    subTextTitleTextStyle: {
      fontFamily: FontFamilyConstants.regular,
      color: appTheme.colors.text,
      fontSize: 12,
      marginBottom: 4,
    },

    subTextContentTextStyle: {
      fontFamily: FontFamilyConstants.regular,
      color: appTheme.colors.text,
      fontSize: 12,
    },

    mainTextTitleTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: appTheme.colors.text,
      fontSize: 14,
    },

    mainTextContentTextStyle: {
      fontFamily: FontFamilyConstants.semibold,
      color: appTheme.colors.text,
      fontSize: 14,
    },
  });
