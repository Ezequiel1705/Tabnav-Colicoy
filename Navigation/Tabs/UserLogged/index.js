import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from '../../Stacks/Shop'
import CartStack from '../../Stacks/Cart'
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import OrdersStack from '../../Stacks/Order'



const BottomTabs = createBottomTabNavigator()

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator  
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            toBarStyle: StyleSheet.toBar
        }}
    >
        <BottomTabs.Screen 
            name= "ShopTab"
            component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused }) => {
                    return(
                        <View>
                            <Fontisto name="shopping-store" size={24} color="black" />
                            <Text>Shop</Text>
                        </View>
                    )
                }
            }}     
        />
        <BottomTabs.Screen 
            name="CartTab"
            component={CartStack}
            options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.item}>
                      <Entypo name="shopping-cart" size={24} color="black" />
                      <Text>Cart</Text>
                    </View>
                  )
                }
              }}
        />
        <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="list" size={24} color="black" />
                <Text>Ordenes</Text>
              </View>
            )
          }
        }}
        />
    </BottomTabs.Navigator>
  )
}

export default TabNavigatorLogged;

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: colors.shadowTab,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});