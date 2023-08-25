import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

const OrderHistoryView = ({navigation,route}:OrderHistoryViewProps) => {
    const[orderhis,updateorderhis]=useState<any>([])
    useEffect(()=>{
      try{
        axios.get('https://orderhistory.free.beeceptor.com/orderhistory').then((response: { data: any; })=>{
            updateorderhis(response.data);
        }).catch((err:any)=>{
          console.log(err);
        })
      }catch(err){
        console.log(err);
      }
    },[])
  return (
    <View>
          
    <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      marginBottom:-90,
      height: Dimensions.get('window').height * 0.2,
      width: '100%',
      paddingTop: 20,
    }}>
    <View style={{flexDirection:'row',marginLeft:10}}>
    <TouchableOpacity onPress={() => navigation.navigate('ProfileMain')}>
    <Icon name="arrow-back-outline" size={(30)}color={'white'}/>
    </TouchableOpacity>
    <Text style={{color: 'white', fontSize: 25,textAlign:'center',marginLeft:80}}>
      Order History
    </Text>
    </View>
   </LinearGradient>
 
   <ScrollView style={{paddingBottom:30}}>
   <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          marginTop: 10,
          paddingVertical: 20,
          paddingHorizontal: 15,}}>
        {
          orderhis.map((m:any)=> (
            <OrderHisNew key={m.order_id} item={m}/>
          ))
        }
     </View>
     </ScrollView>
    
  
    </View>
  )
}

export default OrderHistoryView
interface OrderHistoryViewProps{ 
    navigation?:any;
    route?:any;
  }

  const OrderHisNew =({item}: any)=>{ 
    return(
       
      <View
        style={{
          elevation: 10,
          backgroundColor: '#f5eee1',
          borderColor: 'orange',
          borderWidth:0.5,
          marginTop: 10,
          borderBottomColor:'red',
          paddingVertical: 20,
          paddingHorizontal: 15,}}>
          <View>
            <Text style={{fontWeight: '500', fontSize: 18}}>Order No : {item.order_id}</Text>
          </View>
          <View>
            <Text style={{fontWeight: '500', fontSize: 18}}>Box Size : {item.boxSize}</Text>
          </View>
          <View>
            <Text style={{fontWeight: '500', fontSize: 18}}>Quantity : {item.Items_Quantity}</Text>
          </View>
          <View>
            <Text style={{fontWeight: '500', fontSize: 18}}>Total : {item.order_total}</Text>
          </View>
          <View>
            <Text style={{fontWeight: '500', fontSize: 18}}>Date : {item.date}</Text>
          </View>
      </View>
    
    )
  }