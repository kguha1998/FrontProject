import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Order from './Order';
import Cart from './Cart';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{backgroundColor:'#fc8d1e'},headerShown:false}}>
        <Tab.Screen options={{tabBarIcon:()=><Icon name="grid-outline" size={(30)} />}}  name="Dashboard" component={Dashboard} />
        <Tab.Screen options={{tabBarIcon:()=><Icon name="bag-handle-outline" size={(30)} />}}  name="Order" component={Order} />
        <Tab.Screen options={{tabBarIcon:()=><Icon name="cart-outline" size={(30)} />}}  name="Cart" component={Cart} />
        <Tab.Screen options={{tabBarIcon:()=><Icon name="person-circle-outline" size={(30)} />}}  name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default Home