import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {useAppTheme} from './src/theme/AppTheme';
import {
  foodCartScreen,
  foodListingScreen,
} from './src/routes/ScreenNavRouteData';
import {FoodListingScreen} from './src/screens/foodListingScreen/FoodListingScreen';
import {FoodCartScreen} from './src/screens/foodCartScreen/FoodCartScreen';

// Native Stack navigator for facilitating the navigation
const Stack = createNativeStackNavigator();

/**
 * Function which serves as the starting/entry point of the application
 * @returns JSX element (React component)
 */
export default function App(): JSX.Element {
  const appTheme = useAppTheme();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={appTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* Food Listing Screen */}
            <Stack.Screen
              name={foodListingScreen.routeName}
              component={FoodListingScreen}
              options={{
                title: foodListingScreen.routeDisplayName,
              }}
            />

            {/* Food Cart Screen */}
            <Stack.Screen
              name={foodCartScreen.routeName}
              component={FoodCartScreen}
              options={{
                title: foodCartScreen.routeDisplayName,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
