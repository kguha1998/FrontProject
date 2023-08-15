import { View, Text } from 'react-native'
import React from 'react'
import ProfileView from './ProfileMainView'
import ProfileMainView from './ProfileMainView'

const ProfileMain = ({navigation,route}:ProfileMainProps) => {
  return (
    <ProfileMainView navigation={navigation} />
  )
}

export default ProfileMain
interface ProfileMainProps{
  navigation?: any;
  route?: any;
}