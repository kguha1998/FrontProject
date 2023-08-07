// import { View, Text, TextInput } from 'react-native'
// import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Controller, useForm } from 'react-hook-form';

// const LoginView = ({navigation}: LoginViewPorps) => {
//     // console.log("Nav",navigation)
//     const {
//       control,
//       handleSubmit,
//       setValue,
//       getValues,
//       formState: {errors},
//     } = useForm();
  
//     const onSubmit=(data: any)=>{
//       console.log(data);
//     }
  
//     return (
//       <View>
//       <Text style={{ fontSize: 30, marginTop: 50, textAlign: 'center', color: 'orange' }}>Login</Text>
//       <Controller
//           control={control}
//           rules={{
//             required: true,
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View style={{borderWidth: 0.2, margin: 10,borderRadius:4, borderColor: errors.mobile_Number ?'red': 'gray'}}>
//               <TextInput
//                 placeholder="Mobile Number"
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//           name="mobile_Number"
//         />
//         {errors.mobile_Number && <Text>This is required.</Text>}
//         <Controller
//           control={control}
//           rules={{
//             required: true,
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View style={{borderWidth: 0.2, margin: 10,borderRadius:4, borderColor: errors.Password ?'red': 'gray'}}>
//               <TextInput
//                 placeholder="Password"
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//           name="Password"
//         />
//         {errors.Password && <Text>This is required.</Text>}
  
//         <TouchableOpacity
//          onPress={handleSubmit(onSubmit)}
//           style={{
//             margin: 10,
//             marginTop:30,
//             backgroundColor: '#f77d02',
//             padding: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
          
            
//           }}>
//           <Text>Save Details</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
//         <Text style={{
//             margin: 10,
//             marginTop:30,
//             padding: 10,
//             color:'blue',
//             justifyContent: 'center',
//             alignItems: 'center'}}
//           >
//             Go to Signup
//         </Text>
//       </TouchableOpacity>
//       </View>
        
       
//     )
//   }
// export default LoginView;
// interface LoginViewPorps{
//     navigation?: any;
//     route?: any;
// }


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
// import Input from './Input';

const LoginView = ({navigation,route}: LoginViewPorps) => {

    
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
      KSW
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
            color: '#FFB900',
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
            <View style={{borderBottomWidth: 1, margin: 10,marginTop:20,borderRadius:4, borderColor: errors.mobile_Number ?'red': '#FFB900'}}>
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
            <View style={{borderBottomWidth: 1, margin: 10,marginTop:20,borderRadius:4, borderColor: errors.password ?'red': '#FFB900'}}>
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
        <Text style={{color: '#FFB900', fontSize: 16, textAlign: 'right'}}>
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
            backgroundColor:'#fa8b0c'
          }}>
          <Text style={{color: 'white', fontSize: 19}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{color: '#FFB900', fontSize: 16, textAlign: 'center'}}>
          Dont't have an account?{' '}
          <Text
           onPress={() => navigation.navigate('Signup')} style={{fontWeight:'bold'}}
           >Signup</Text>
        </Text>
      </View>
    </View>
  );
};

// export default LoginView;
// interface LoginViewPorps{
//       navigation?: any;
//       route?: any;
//   }

const mapStateToProps = (state: StoreState,ownProps:any)=>{
  return{
    user: state.user.user_detail
  }
}
const mapDispatchToProps ={

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
interface LoginViewPorps{
  navigation?: any;
  route?: any;

}