import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Controller, useForm } from 'react-hook-form';

const LoginView = ({navigation, route}: LoginViewPorps) => {
    // console.log("Nav",navigation)
    const {
      control,
      handleSubmit,
      setValue,
      getValues,
      formState: {errors},
    } = useForm();
  
    const onSubmit=(data: any)=>{
      console.log(data);
    }
  
    return (
      <View>
      <Text style={{ fontSize: 30, marginTop: 50, textAlign: 'center', color: 'orange' }}>Login</Text>
      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10,borderRadius:4, borderColor: errors.mobile_Number ?'red': 'gray'}}>
              <TextInput
                placeholder="Mobile Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="mobile_Number"
        />
        {errors.mobile_Number && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10,borderRadius:4, borderColor: errors.Password ?'red': 'gray'}}>
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="Password"
        />
        {errors.Password && <Text>This is required.</Text>}
  
        <TouchableOpacity
         onPress={handleSubmit(onSubmit)}
          style={{
            margin: 10,
            marginTop:30,
            backgroundColor: '#f77d02',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          
            
          }}>
          <Text>Save Details</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Signup')} >
        <Text style={{
            margin: 10,
            marginTop:30,
            padding: 10,
            justifyContent: 'center',
            color:'blue',
            alignItems: 'center'}}
          >
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