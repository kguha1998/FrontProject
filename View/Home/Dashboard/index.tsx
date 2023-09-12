import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddOn from './AddOn';
import ChooseItem from './ChooseItem';
import ChooseBox from './ChooseBox';
const Stack = createStackNavigator();


const Dashboard = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:true}}>
       <Stack.Screen name="ChooseBox" component={ChooseBox} />
       <Stack.Screen name="ChooseItem" component={ChooseItem} />
       <Stack.Screen name="AddOn" component={AddOn} />
    </Stack.Navigator>
  )
}

export default Dashboard