import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Controller, useForm } from 'react-hook-form';

const SignupView = ({GotoLogin}:SignupViewProps) => {
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
      <Text style={{fontSize:35,textAlign:'center',marginTop:30}}>
        Sign Up
      </Text>
    <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderWidth: 1, margin: 10, marginTop:30,borderRadius:12, borderColor: errors.firstName ?'red': '#454040'}}>
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderWidth: 1, margin: 10,marginTop:20, borderRadius:12, borderColor: errors.last_name ?'red': '#454040'}}>
            <TextInput
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="last_name"
      />
      {errors.last_name && <Text>This is required.</Text>} 

<Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{borderWidth: 1, margin: 10,marginTop:20,borderRadius:12,borderColor:'#454040'}}>
        <TextInput
          placeholder="Email(Optional)"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        </View>
      )}
      name="email"
    />

    <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderWidth: 1, margin: 10,marginTop:20,borderRadius:12, borderColor: errors.mobile_Number ?'red': '#454040'}}>
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

      <TouchableOpacity
       onPress={handleSubmit(onSubmit)}
        style={{
          margin: 30,
          marginLeft:'25%',
          backgroundColor: '#f77d02',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:12,
          width:180
        
          
        }}>
        <Text>Save Details</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>GotoLogin('LoginAgain')}>
        <Text style={{fontSize:15,color:'blue'}}>Go to Login</Text>
      </TouchableOpacity>
    </View>
      
     
  )
}

export default SignupView;
interface SignupViewProps{ 
    GotoLogin?:any;
}



