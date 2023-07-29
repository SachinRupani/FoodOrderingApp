import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../../utils/FontFamilyConstants';

export const foodCartScreenStyles = (appTheme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    listContainer: {
      flex: 1,
      paddingHorizontal: 16,
    },

    listHeaderContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    listHeaderTextStyle: {
      fontFamily: FontFamilyConstants.semibold,
      fontSize: 18,
      color: appTheme.colors.text,
      marginVertical: 16,
      marginStart: 16,
    },

    emptyDataContainer: {
      flex: 20,
    },
  });
