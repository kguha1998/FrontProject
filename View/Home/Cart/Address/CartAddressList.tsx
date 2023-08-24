import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


const CartAddressList = ({address}:AddressListViewProps) => {
    return(
    <ScrollView>
    <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginTop:5,
            marginBottom: 5,
            marginLeft:10,
            fontWeight:'500'
          }}>
          Select a Address
        </Text>
        {
          address.map((m:any)=> (
            <Address1 key={m.address_id} item={m}/>
            
          ))
        }
    <View style={{
     elevation: 10,
     backgroundColor: '#fa8b0c',
     borderRadius: 10,
     height:50,
     margin: 20,
     marginTop: 20,
     paddingVertical: 10,
     paddingHorizontal: 5,}}>
      <TouchableOpacity >
        <Text style={{textAlign:"center",fontSize:18}}>+Add Address</Text>
      </TouchableOpacity>
      </View> 
      
         
      </ScrollView >
    )}
    export default CartAddressList;
    interface AddressListViewProps{ 
      navigation?:any;
      route?:any;
      address?:any
  
      
     
    }
    
    const Address1=({item}: any)=>{ 
      console.log(item)
        return(
          <View
       style={{
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 15}}>
    
          
    
    <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>House No: {item.house_no}</Text>
       </View>
       <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>Address : {item.address_line1}</Text>
       </View>
       <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>Society Name: {item.address_line2}</Text>
       </View>
       <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>City : {item.city}</Text>
       </View>
       <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>State : {item.state}</Text>
       </View>
       <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>Country : {item.country}</Text>
       </View>
       <View>
         <Text style={{fontWeight: '500', fontSize: 18}}>Pincode : {item.pin}</Text>
       </View>
       <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
       <TouchableOpacity style={{width:'30%',height:30,backgroundColor:'#fa8b0c', borderRadius: 20}}>
       <Text style={{textAlign:'center',marginTop:5}}>Edit</Text>
       </TouchableOpacity>
       </View> 

           
      
         </View>
        )
      }
