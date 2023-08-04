import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './LoginView';


const Login = ({navigation, route}: LoginPorps) => {
  console.log("Navigation", navigation);
  return (
  <LoginView navigation={navigation} />
  )

}

export default Login;
interface LoginPorps{
  navigation?: any;
  route?: any;
}