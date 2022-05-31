import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigation} from '@react-navigation/native-stack'
import { Colors } from '../../../Styles/Colors';
import CartScreen from '../../../Screens/CartScreen';



const Stack = createStackNavigation();

const CartStack = () => {
  return (
    <Stack.Navigator intialRouteName=""
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.darkBlue
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontaFamily: "Koulen",
                fontSize: 28,
            },
            headerTitleAlign: "center"
        }}
    >
        <Stack.Screen>
            name="Cart"
            component={CartScreen}
            options={{
                title: "Carrito"
            }}
        </Stack.Screen>

    </Stack.Navigator>
  ) 
}

export default CartStack

const styles = StyleSheet.create({})