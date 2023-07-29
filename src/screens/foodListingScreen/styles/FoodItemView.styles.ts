import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';

export const foodItemViewStyles = (appTheme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: appTheme.colors.card,
      flexDirection: 'row',
      elevation: 1,
      marginHorizontal: 16,
      marginTop: 16,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 8,
      overflow: 'hidden',
    },

    mainContentContainer: {
      flex: 1,
      flexDirection: 'column',
      marginStart: 12,
      marginEnd: 4,
      overflow: 'hidden',
    },

    imageStyle: {
      width: 96,
      height: 80,
      borderRadius: 8,
    },

    titleAndDietIconContainer: {
      flexDirection: 'row',
      marginTop: 2,
    },

    titleTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: appTheme.colors.text,
      fontSize: 14,
      lineHeight: 16,
      flex: 1,
    },

    priceTextStyle: {
      fontFamily: FontFamilyConstants.semibold,
      color: appTheme.colors.text,
      fontSize: 16,
      marginTop: 8,
    },

    descriptionTextStyle: {
      fontFamily: FontFamilyConstants.regular,
      color: appTheme.colors.text,
      fontSize: 11,
      marginTop: 12,
    },

    categoryValueTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      color: appTheme.colors.primary,
      fontSize: 11,
      marginTop: 12,
    },

    buttonAddContainerStyle: {
      marginTop: 12,
      marginHorizontal: 4,
    },
  });
