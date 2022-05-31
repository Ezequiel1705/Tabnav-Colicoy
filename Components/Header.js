import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Styles/Colors'



const Header = ({title = "E-commerce"}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darkBlue,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Koulen',
    }
})