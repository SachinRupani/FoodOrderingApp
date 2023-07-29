import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';

export const checkoutSuccessfulModalStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    mainContentContainer: {
      backgroundColor: appTheme.colors.card,
      flexDirection: 'column',
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      overflow: 'hidden',
      marginHorizontal: 32,
      paddingVertical: 32,
    },

    orderSuccessfulTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: appTheme.colors.text,
      fontSize: 18,
      marginTop: 16,
    },

    totalAmountTextTitletStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: appTheme.colors.text,
      fontSize: 14,
      marginTop: 16,
    },

    totalAmountTextContentStyle: {
      fontFamily: FontFamilyConstants.semibold,
      color: appTheme.colors.text,
      fontSize: 32,
      marginTop: 8,
    },

    btnOkayContainer: {
      width: 120,
      height: 44,
      borderRadius: 22,
      backgroundColor: appTheme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: 24,
    },

    btnOkayTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: '#ffffff',
      fontSize: 16,
    },
  });
