
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Controller, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { StoreState } from '../../../Models/reduxModel';


const LoginView = ({navigation,route,Login}: LoginViewPorps) => {

    
  const {
          control,
          handleSubmit,
          setValue,
          getValues,
          formState: {errors},
        } = useForm();
      
        const onSubmit=(data: any)=>{
          console.log("call1",data)
          Login(data)
        }

        const mobileVerify =()=>{
          if(!!getValues('mobile_Number') && getValues('mobile_Number').length == 10){
            console.log("service call");
            
          }else{
            ToastAndroid.show('Please Enter Mobile Number', 3000)
          }
          
        }
  return (
    <View>
      <LinearGradient
    colors={['#407e33', '#67de4d','#407e33',]}
    start={{x: 1, y: 0}}
    end={{x: 0, y: 0}}
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
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2c711f',
            textAlign: 'center',
          }}>
          LOGIN
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength:10,
            minLength:10,
            pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderBottomWidth: 1, margin: 10,marginTop:20,borderRadius:4, borderColor: errors.mobile_Number ?'red': '#2c711f'}}>
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
            <View style={{borderBottomWidth: 1, margin: 10,marginTop:20,borderRadius:4, borderColor: errors.password ?'red': '#2c711f'}}>
              <TextInput
                placeholder="Password" secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
        {/* <TextInput placeholder="Username" />
        <TextInput
          placeholder="Password"
        

        /> */}
        <Text style={{color: '#2c711f', fontSize: 16, textAlign: 'right'}}>
          Forgot Password?
        </Text>
        <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
          // onPress={() => {}}
          // colors={['#FFB900', '#FFE435', '#FFA000']}
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 0}}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 30,
            backgroundColor:'#2c711f'
          }}>
          <Text style={{color: 'white', fontSize: 19}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{color: '#2c711f', fontSize: 16, textAlign: 'center'}}>
          Dont't have an account?{' '}
          <Text
           onPress={() => navigation.navigate('Signup')} style={{fontWeight:'bold'}}
           >Signup</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginView;
interface LoginViewPorps{
      navigation?: any;
      route?: any;
      Login?:any;
  }

