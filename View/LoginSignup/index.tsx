import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';


const LoginSignup = (porps:any) => {
  const Stack = createStackNavigator();
  return (
 
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator> 
  
  )
}

export default LoginSignup