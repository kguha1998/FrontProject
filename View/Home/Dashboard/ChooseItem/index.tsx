import { View, Text } from 'react-native'
import React from 'react'
import ChooseItemView from './ChooseItemView';

const ChooseItem = ({navigation, route}:ChooseItemProps) => {
  return (
    <ChooseItemView  navigation={navigation} />
  )
}

export default ChooseItem;
interface ChooseItemProps{
  navigation?: any;
  route?: any;
}