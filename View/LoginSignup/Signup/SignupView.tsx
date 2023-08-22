import { View, Text, TextInput, Dimensions, ToastAndroid } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Controller, useForm } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';



const SignupView = ({navigation,route}:SignupViewProps) => {
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
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.Name ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="Name"
      />
      {errors.Name && <Text>This is required.</Text>}

   
<Controller
      control={control}
      rules={{
        required: true,
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
      name="email"
    />

    <Controller
        control={control}
        rules={{
          required: true,
          maxLength:10,
          minLength:10,
          pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.mobile_Number ?'red': '#fa8b0c'}}>
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
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20,borderColor: errors.password ?'red': '#fa8b0c'}}>
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

      <Controller
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
      {errors.conpassword && <Text>This is required.</Text>}

      <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          //onPress={() => navigation.navigate('Home')}
          //colors={['#FFB900', '#FFE435', '#FFA000',]}
          //start={{x: 0, y: 0}}
          //end={{x: 1, y: 0}}
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
//     <View>
    //   <Text style={{fontSize:35,textAlign:'center',marginTop:30}}>
    //     Sign Up
    //   </Text>
    // <Controller
    //     control={control}
    //     rules={{
    //       required: true,
    //     }}
    //     render={({field: {onChange, onBlur, value}}) => (
    //       <View style={{borderWidth: 1, margin: 10, marginTop:30,borderRadius:12, borderColor: errors.firstName ?'red': '#454040'}}>
    //         <TextInput
    //           placeholder="First name"
    //           onBlur={onBlur}
    //           onChangeText={onChange}
    //           value={value}
    //         />
    //       </View>
    //     )}
    //     name="firstName"
    //   />
    //   {errors.firstName && <Text>This is required.</Text>}

//       <Controller
//         control={control}
//         rules={{
//           required: true,
//         }}
//         render={({field: {onChange, onBlur, value}}) => (
//           <View style={{borderWidth: 1, margin: 10,marginTop:20, borderRadius:12, borderColor: errors.last_name ?'red': '#454040'}}>
//             <TextInput
//               placeholder="Last name"
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           </View>
//         )}
//         name="last_name"
//       />
//       {errors.last_name && <Text>This is required.</Text>} 

// <Controller
//       control={control}
//       rules={{
//         required: true,
//       }}
//       render={({ field: { onChange, onBlur, value } }) => (
//         <View style={{borderWidth: 1, margin: 10,marginTop:20,borderRadius:12,borderColor:'#454040'}}>
//         <TextInput
//           placeholder="Email(Optional)"
//           onBlur={onBlur}
//           onChangeText={onChange}
//           value={value}
//         />
//         </View>
//       )}
//       name="email"
//     />

//     <Controller
//         control={control}
//         rules={{
//           required: true,
//         }}
//         render={({field: {onChange, onBlur, value}}) => (
//           <View style={{borderWidth: 1, margin: 10,marginTop:20,borderRadius:12, borderColor: errors.mobile_Number ?'red': '#454040'}}>
//             <TextInput
//               placeholder="Mobile Number"
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           </View>
//         )}
//         name="mobile_Number"
//       />
//       {errors.mobile_Number && <Text>This is required.</Text>}

//       <TouchableOpacity
//        onPress={handleSubmit(onSubmit)}
//         style={{
//           margin: 30,
//           marginLeft:'25%',
//           backgroundColor: '#f77d02',
//           padding: 10,
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderRadius:12,
//           width:180
        
          
//         }}>
//         <Text>Save Details</Text>
//       </TouchableOpacity>



//       <TouchableOpacity onPress={()=>GotoLogin('LoginAgain')}>
//         <Text style={{fontSize:15,color:'blue'}}>Go to Login</Text>
//       </TouchableOpacity>
//     </View>
      
     
  )
 }

export default SignupView;
interface SignupViewProps{ 
    navigation?:any;
    route?:any;
}



