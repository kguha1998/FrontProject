import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LoginView = ({navigation, route}: LoginViewPorps) => {
    console.log("Nav",navigation)
  return (
    <View>
    
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')} >
        <Text>
            Go to Signup
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginView;
interface LoginViewPorps{
    navigation?: any;
    route?: any;
}