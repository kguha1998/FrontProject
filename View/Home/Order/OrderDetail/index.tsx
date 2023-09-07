import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailView from './OrderDetailView'

const OrderDetail = ({navigation,route}:OrderDetailProps) => {
  return (
    <View>
      <OrderDetailView navigation={navigation}/>
    </View>
  )
}

export default OrderDetail
interface OrderDetailProps{
    navigation?: any;
    route?:any;
  }