import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { SingleAddress } from '../../../../Models/User'
import { AddressEdit } from '../../../../Service/userService'

const AddressEditView = ({navigation,singleaddress,AddressEdit}:AddressEditViewProps) => {

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();

  const onSubmit=(data: any)=>{
    AddressEdit(data)
  }
  useEffect(()=>{
if(!!singleaddress){
  setValue('house_no',singleaddress.house_no)
  setValue('address_line1',singleaddress.address_line1)
  setValue('address_line2',singleaddress.address_line2)
  setValue('city',singleaddress.city)
  setValue('state',singleaddress.state)
  setValue('country',singleaddress.country)
  setValue('pin',singleaddress.pin)

  
}
  },[singleaddress])
  return (
    <View>
    <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      marginBottom:-70,
      height: Dimensions.get('window').height * 0.2,
      width: '100%',
      paddingTop: 20,
    }}>
    <View style={{flexDirection:'row',marginLeft:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('AddressList')}>
            <Icon name="arrow-back-outline" size={(30)}color={'white'}/>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 25,textAlign:'center',marginLeft:60}}>
                Edit Your Address
        </Text>
    </View>
  </LinearGradient>
  <ScrollView style={{paddingBottom:100,marginBottom:170}}>
   <View
   style={{
     elevation: 10,
     backgroundColor: 'white',
     borderRadius: 10,
     margin: 20,
     marginTop: 30,
     paddingVertical: 20,
     paddingHorizontal: 15,}}>
        <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.house_no ?'red': '#fa8b0c'}}>
            <TextInput
             placeholder="Flat No"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="house_no"
      />
      {errors.Name && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.address_line1 ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Socity Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="address_line1"
      />
      {errors.mobile_Number && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.address_line2 ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Full Address "
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="address_line2"
      />
      {errors.Society && <Text>This is required.</Text>}

     

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.city ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="City"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="city"
      />
      {errors.Address && <Text>This is required.</Text>}

      <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{borderBottomWidth:1, margin: 10,marginTop:20,borderColor: errors.state ?'red': '#fa8b0c'}}>
        <TextInput
          placeholder="State"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        </View>
      )}
      name="state"
    />

<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.country ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Country"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="country"
      />
      {errors.Address && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          // maxLength:6,
          // minLength:6,
          // pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
         }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.pin ?'red': '#fa8b0c'}}>
            <TextInput
              placeholder="Pin Code"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="pin"
      />
      {errors.Pin && <Text>This is required.</Text>}


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
          <Text style={{color: 'white', fontSize: 19}}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  )
}
   
 

export default AddressEditView
interface AddressEditViewProps{ 
  navigation?:any;
  route?:any;
  singleaddress?:any;
  AddressEdit?:any
}