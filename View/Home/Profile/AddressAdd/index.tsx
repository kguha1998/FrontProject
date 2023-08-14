import { View, Text } from 'react-native'
import React from 'react'
import AddressAddView from './AddressAddView'

const AddressAdd = ({navigation,route}:AddressAddProps) => {
  return (
    <View>
    <AddressAddView navigation={navigation} />
   </View>
 )
  
}

export default AddressAdd
interface AddressAddProps{ 
  navigation?:any;
  route?:any;
}