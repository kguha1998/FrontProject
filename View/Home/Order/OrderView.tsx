import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const OrderView = () => {
  return (
    <LinearGradient
         colors={['#FFB900', '#FFE435', '#FFA000',]}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}
         style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
          }}>
          <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>
               Orders
          </Text>
      </LinearGradient>
  )
}

export default OrderView