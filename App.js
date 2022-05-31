import { StyleSheet, View, ActivityIndicator } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreens';
import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import DetailScreens from './Screens/DetailScreens';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';

export default function App() {

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });

  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);
  //console.log(categorySelected);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <MainNavigator />
    </SafeAreaView>
  );
}


