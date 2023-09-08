import { View, Text } from 'react-native'
import React from 'react'
import ProfileView from './ProfileMain/ProfileMainView'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileMain from './ProfileMain';
import AddressList from './AddressList';
import AddressEdit from './AddressEdit';
import AddressAdd from './AddressAdd';
import EditProfile from './EditProfile';
import OrderHistory from './OrderHistory';

const Stack = createStackNavigator();
const Profile = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="ProfileMain" component={ProfileMain} />
       <Stack.Screen name="EditProfile" component={EditProfile} />
       <Stack.Screen name="AddressList" component={AddressList} />
       <Stack.Screen name="AddressEdit" component={AddressEdit} />
       <Stack.Screen name="AddressAdd" component={AddressAdd} />
       
    </Stack.Navigator>
  )
}

export default Profile