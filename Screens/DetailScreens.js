import { StyleSheet, Text, View, Image, Button, Dimensions, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import { PRODUCTS } from '../Data/products'

const DetailScreens = ({
    route,
    navigation
 }) => {

    const {productId} = route.params

    console.log(productId);

  const {width, height} = useWindowDimensions();
  const [product, setProduct] = useState (null); 
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
      setOrientation( height > width ? "portrait" : "landscape" )
  }, [height, width])

  //console.log(orientation);

  const handleBack = () => {
    navigation.goBack()
}


useEffect(() => {
    const productSelected = PRODUCTS.find(product => product.id === productId);
    //console.log(productSelected);
    setProduct(productSelected);
}, [productId])


return (
      product && ( 
        
        <View style={orientation === 'portrait' ? styles.containerVertical : styles.containertHorizontal}>  
            <Image
                source={{uri: product?.image}}
                style={styles.image}
                resizeMode="cover"
            >
            </Image>
        <Text>{product?.description}</Text>
        <Text>$ {product?.price}</Text>
        <Button title='Go Back' onPress={handleBack}/>
        </View>
    )

    
  )
}

export default DetailScreens

const styles = StyleSheet.create({
    containerVertical: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containertHorizontal: {
        flex: 1,
        flexDirection: 'row'
    },
    image:{
        width: 0.8 * Dimensions.get('window').width,
        height: 300,
        marginTop: 30
    }
})