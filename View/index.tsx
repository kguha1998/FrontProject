import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from './LoginSignup';
import Home from './Home';


const MainRoute = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      
    </Stack.Navigator> 
  )
}

export default MainRoute