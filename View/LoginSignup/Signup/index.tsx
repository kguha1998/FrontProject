import { View, Text } from 'react-native'
import React from 'react'
import SignupView from './SignupView';


const Signup = ({navigation, route}:SignupProps)  => {
  const GotoLogin=(data:string)=>{
    navigation.navigate('Login');

  }
  return (
   
    <SignupView  GotoLogin={GotoLogin} />   
  )
  
  }

export default Signup;

interface SignupProps{
  navigation?: any;
  route?: any;
}