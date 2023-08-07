import { View, Text } from 'react-native'
import React from 'react'
import SignupView from './SignupView';


const Signup = ({navigation, route}:SignupProps)  => {

  
  return (
   
    <SignupView  navigation={navigation} />   
  )
  
  }

export default Signup;

interface SignupProps{
  navigation?: any;
  route?: any;
}