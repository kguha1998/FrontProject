import { View, Text } from 'react-native'
import React from 'react'
import OrderHistoryView from './OrderHistoryView'

const OrderHistory = ({navigation,route}:OrderHistoryProps) => {
  return (
    <View>
      <OrderHistoryView navigation={navigation} />
    </View>
  )
}

export default OrderHistory
interface OrderHistoryProps{ 
  navigation?:any;
  route?:any;
}