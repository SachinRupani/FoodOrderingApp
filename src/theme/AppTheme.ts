import {Theme, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

// Dark theme colors
export const DarkModeTheme: Theme = {
  dark: true,
  colors: {
    background: '#222222',
    card: '#333333',
    text: '#f0f0f0',
    border: '#90A4AE',
    notification: DarkTheme.colors.notification,
    primary: DarkTheme.colors.primary,
  },
};

// Default/Light theme colors
export const LightModeTheme: Theme = {
  dark: false,
  colors: {
    background: DefaultTheme.colors.background,
    card: DefaultTheme.colors.card,
    text: '#222222',
    border: '#546E7A',
    notification: DefaultTheme.colors.notification,
    primary: DefaultTheme.colors.primary,
  },
};

/**
 * Function to get the current app theme object
 * (containing respective theme colors to use)
 */
export const useAppTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? DarkModeTheme : LightModeTheme;
};
