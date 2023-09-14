import { View, Text, TextInput, Dimensions, ToastAndroid } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Controller, useForm } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';



const SignupView = ({navigation,Signup}:SignupViewProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();

  const onSubmit=(data: any)=>{
    
     
    // if(error===undefined){
    //   ToastAndroid.show('User Already Exists!', ToastAndroid.LONG);
    // }else{
    Signup(data,navigation);
  

  }
/*   if (error){
  
    ToastAndroid.show('Allready Register!', ToastAndroid.LONG);
    navigation.navigate('Login');
   }
   else{
    ToastAndroid.show('Successfully Signup!', ToastAndroid.LONG);
    navigation.navigate('Login');
  } */
  // const onSubmit = async (data: any) => {
  //   // Assuming Signup is an async function that returns a success flag
  //   const signupSuccess = await Signup(data);
  
  //   if (signupSuccess) {
  //     ToastAndroid.show('Signup successful!', ToastAndroid.LONG);
  //     navigation.navigate('Login');
  //   } else {
  //     // Handle signup failure, show an error message, etc.
  //     ToastAndroid.show('Signup Faild! Please Try Again', ToastAndroid.LONG);
  //   }
  // };



  const mobileVerify =()=>{
    if(!!getValues('mobile_Number') && getValues('mobile_Number').length == 10){
      console.log("service call");
      
    }else{
      ToastAndroid.show('Please Enter Mobile Number', 3000)
    }
    
  }
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
 return (
  <ScrollView>
  <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height: Dimensions.get('window').height * 0.2,
      width: '100%',
      alignItems: 'center',
      paddingTop: 40,
    }}>
    <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>
      TEST
    </Text>
  </LinearGradient>
  <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 20,
          marginTop: -50,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fa8b0c',
            textAlign: 'center',
          }}>
          Sign Up
        </Text>
       
    <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.customer_name ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="customer_name"
      />
      {errors.customer_name && <Text style={{ color: 'red' }}>This field is required</Text>}

   
<Controller
      control={control}
      rules={{
        required: true,
        pattern: {
          value: emailRegex,
          message: 'Invalid email address',
        },
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{borderBottomWidth:1, margin: 10,marginTop:20,borderColor:'#fa8b0c'}}>
        <TextInput
          placeholder="Email(Optional)"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        </View>
      )}
      name="customer_email"
    />
    
    
    <Controller
        control={control}
        rules={{
          required: true,
          
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20,borderColor: errors.customer_password ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Password" secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="customer_password"
      />
      {errors.customer_password && <Text style={{ color: 'red' }}>This field is required</Text>}
    <Controller
        control={control}
        rules={{
          required: true,
          maxLength:10,
          minLength:10,
          pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.customer_phone ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Mobile Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="customer_phone"
      />
      {errors.customer_phone && <Text style={{ color: 'red' }}>Invalid mobile number (10 digits required)</Text>}


      {/* <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.conpassword ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Confirm Password" secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="conpassword"
      />
      {errors.conpassword && <Text>This is required.</Text>} */}

      <TouchableOpacity
           onPress={() => {
            handleSubmit(onSubmit)();
            
          }}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',

            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 10,
            backgroundColor:'#fa8b0c'
          }}>
          <Text style={{color: 'white', fontSize: 19}}>SIGNUP</Text>
        </TouchableOpacity>

        <Text style={{color: '#fa8b0c', fontSize: 16, textAlign: 'center',marginTop:20}}>
          Already have an account?{' '}
          <Text onPress={()=> navigation.navigate('Login')} style={{fontWeight:'bold'}}>Login</Text>
        </Text> 
      </View>
  </ScrollView>

      
     
  )
 }

export default SignupView;
interface SignupViewProps{ 
    navigation?:any;
    Signup?:any;
   
    
}

