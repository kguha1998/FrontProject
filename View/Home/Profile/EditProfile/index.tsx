import { View, Text } from 'react-native'
import React from 'react'

import EditProfileView from './EditProfileView'

const EditProfile = ({navigation,route}:EditProfileProps) => {
  return (
    <EditProfileView navigation={navigation} />
  )
}

export default EditProfile
interface EditProfileProps{ 
    navigation?:any;
    route?:any;
  }