import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const OrderConfirmation = (props:any) => {
  return (
    <View>
    <TouchableOpacity onPress={() => props.setStep(3)}>
      <Text>Order confirmation</Text>
    </TouchableOpacity>
  </View>
  )
}

export default OrderConfirmation