import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import { StoreState } from '../../Models/reduxModel';
import { connect } from 'react-redux';
import { userDetail } from '../../Models/User';

const Stack = createStackNavigator();
const LoginSignup = (porps:any) => {

  return (
 
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator> 
  
  )
}



export default LoginSignup
