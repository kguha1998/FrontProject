import { View, Text, Dimensions, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'


import LinearGradient from 'react-native-linear-gradient'
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const EditProfileView = ({navigation,route,EditUserDetail}:EditProfileViewProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();

  const onSubmit=(data: any)=>{
    EditUserDetail(data);
  //   ToastAndroid.show('Details Updated!', ToastAndroid.LONG);
  //  navigation.navigate('ProfileMain');
  }
  return (
    <View>
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
      paddingTop: 20,
    }}>
    <View style={{flexDirection:'row',marginLeft:10}}>
    <TouchableOpacity onPress={() => navigation.navigate('ProfileMain')}>
    <Icon name="arrow-back-outline" size={(30)}color={'white'}/>
    </TouchableOpacity>
    <Text style={{color: 'white', fontSize: 25,textAlign:'center',marginLeft:40}}>
      Manage Your Account
    </Text>
    </View>
   
  </LinearGradient>
 

   <View
   style={{
     elevation: 10,
     backgroundColor: 'white',
     borderRadius: 10,
     margin: 20,
     marginTop: -30,
     paddingVertical: 20,
     paddingHorizontal: 15,}}>
      <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fa8b0c',
            textAlign: 'center',
          }}>
          Profile Details
        </Text>
      
    
    <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderWidth:1,borderRadius:10,marginTop:40,borderColor: errors.customer_name ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="  Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="customer_name"
      />
      {errors.Name && <Text>This is required.</Text>}

   
<Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{borderWidth:1,borderRadius:10, margin: 10,marginTop:30,borderColor:'#fa8b0c'}}>
        <TextInput
          placeholder="  Email"
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
          maxLength:10,
          minLength:10,
          pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderWidth:1, margin: 10,marginTop:30,borderRadius:10, borderColor: errors.customer_phone ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder=" Mobile Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="customer_phone"
      />
      {errors.mobile_Number && <Text>This is required.</Text>}


      <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
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
          <Text style={{color: 'white', fontSize: 19}}>Edit</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>

    </View>
 
  )
}

export default EditProfileView
interface EditProfileViewProps{ 
  navigation?:any;
  route?:any;
  EditUserDetail?:any
}
