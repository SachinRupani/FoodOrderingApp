import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';
import {ScreenDimensions} from '../../../utils/ScreenUtils';

export const foodListingScreenStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    searchBarContainer: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingVertical: 16,
      backgroundColor: appTheme.colors.card,
      elevation: 3,
    },

    dietTypeFilterContainer: {
      flexDirection: 'row',
      marginTop: 16,
      alignItems: 'center',
    },

    // Veg and Non-Veg Filter Buttons (Reset not included here)
    dietTypeFilterSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },

    resetFilterTextStyle: {
      color: appTheme.colors.primary,
      fontFamily: FontFamilyConstants.medium,
      fontSize: 13,
    },

    flatListFoodItemsStyle: {
      flex: 1,
    },

    loadingIndicatorContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: ScreenDimensions.width,
      height: ScreenDimensions.height,
    },

    footerContentStyle: {
      paddingBottom: 24,
    },
  });
