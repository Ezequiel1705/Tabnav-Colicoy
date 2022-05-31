import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreens from '../../../Screens/CategoriesScreens';
import ProductsScreen from '../../../Screens/ProductsScreen';
import DetailScreens from '../../../Screens/DetailScreens';
import { Colors } from '../../../Styles/Colors';


  const Stack = createNativeStackNavigator();
  
  function ShopNavigator() {
    return (
      
        <Stack.Navigator initialRouteName="Categories"
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.darkBlue
                },
                headerTintColor: "white",
                headerTitleStyle:{
                  fontFamily: 'Koulen',
                  fontSize: 26,
                },
                headerTitleAlign: "center"
,              }}
        >
          <Stack.Screen 
            name="Categories" 
            component={CategoriesScreens}
            options = {
              {
                title: "Categorias"
              }
          }
          />
          <Stack.Screen 
            name="Product" 
            component={ProductsScreen}
            options = { ({route}) => ({
              title: route.params.categoryTitle,
              headerStyle: {
                backgroundColor: route.params.categoryTitle === "Ropa" ? Colors.regularBlue : Colors.darkBlue
              }
            })
          }
          />
          <Stack.Screen 
            name = "Detail" 
            component={DetailScreens}
            options = { ({route}) => ({
              title: route.params.productTitle
            })} 
          />
        </Stack.Navigator>
      
    );
  }

export default ShopNavigator;

const styles = StyleSheet.create({})