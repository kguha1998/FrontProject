import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CartScreen = () => {
    return (
<ScrollView>
    <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height: Dimensions.get('window').height * 0.1,
      width: '100%',
      alignItems: 'center',
      paddingTop: 25,
    }}>
    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold',marginBottom:10,}}>
      CART
    </Text>
  </LinearGradient>
    <View>
      <Text style={{color: 'black', fontSize: 25,marginBottom:10,marginTop:10}}>Large Box</Text>
    </View>
  </ScrollView>
    )
}


export default CartScreen