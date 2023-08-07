import { View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChooseBoxView from './ChooseBoxView';


const ChooseBox = ({navigation, route}: ChooseBoxProps) => {
       return(
        <ChooseBoxView navigation={navigation} />
        )
      }
      export default ChooseBox;
      interface ChooseBoxProps{
        navigation?: any;
        route?: any;
      }