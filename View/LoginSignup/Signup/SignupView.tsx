import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignupView = ({GotoLogin}:SignupViewProps) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>GotoLogin('LoginAgain')}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupView;
interface SignupViewProps{ 
    GotoLogin?:any;
}

