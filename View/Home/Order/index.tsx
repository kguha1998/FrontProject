import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';

const Stack = createStackNavigator();
const Order = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:true}}>
       <Stack.Screen name="OrderList" component={OrderList} />
       <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  )
}

export default Order