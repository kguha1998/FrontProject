import { View, Text } from 'react-native'
import React from 'react'
import AddOnView from './AddOnView';

const AddOn = ({navigation, route}: AddOnProps) => {
  return (
    <AddOnView navigation={navigation} />
  )
}

export default AddOn;
interface AddOnProps{
  navigation?: any;
  route?: any;
}