import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FontFamilyConstants} from '../../utils/FontFamilyConstants';

export const outlineButtonStyles = (
  appTheme: Theme,
  outlineAndTextColor: string,
) =>
  StyleSheet.create({
    container: {
      width: 84,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      height: 36,
      paddingHorizontal: 16,
      borderWidth: 2,
      borderColor: outlineAndTextColor,
    },

    btnTextStyle: {
      fontFamily: FontFamilyConstants.medium,
      fontSize: 12,
      color: outlineAndTextColor,
    },
  });
