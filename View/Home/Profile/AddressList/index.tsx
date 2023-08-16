import { View, Text } from 'react-native'
import React from 'react'
import AddressListView from './AddressListView'

const AddressList = ({navigation,route}:AddressListProps) => {
  return (
    <View>
     <AddressListView navigation={navigation} />
    </View>
  )
}

export default AddressList
interface AddressListProps{ 
  navigation?:any;
  route?:any;
}