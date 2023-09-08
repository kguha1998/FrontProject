import { View, Text } from 'react-native'
import React from 'react'
import OrderListView from './OrderListView'

const OrderList = ({navigation,route}:OrderListProps) => {
  return (
    <View>
      <OrderListView navigation={navigation}/>
    </View>
  )
}

export default OrderList
interface OrderListProps{
    navigation?: any;
    route?:any;
  }