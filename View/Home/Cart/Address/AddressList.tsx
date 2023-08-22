import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const AddressList = () => {
 const[address,updateaddress]=useState<any>([])
    useEffect(()=>{
      try{
        axios.get('https://mocki.io/v1/bbd1d68e-8d74-4a73-9c9b-12ded889e19e').then((response: { data: any; })=>{
          updateaddress(response.data);
        }).catch((err:any)=>{
          console.log(err);
        })
      }catch(err){
        console.log(err);
      }
    },[])
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
            <Address key={m.name} item={m}/>
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
    export default AddressList;
    
    const Address=({item}: any)=>{ 
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
    
          
    
          <View><Text style={{fontWeight:'500',fontSize: 15}}>Name: {item.name}</Text></View>
           <View><Text style={{ fontWeight:'500',fontSize: 15}}>Mobile No : {item.MobileNo}</Text></View>
           <View><Text style={{ fontWeight:'500',fontSize: 15}}>Society Name: {item.Society}</Text></View>
           <View><Text style={{ fontWeight:'500',fontSize: 15}}>Flat/Tower No : {item.Address}</Text></View>
           <View><Text style={{ fontWeight:'500',fontSize: 15}}>Landmark : {item.Landmark}</Text></View>
           <View><Text style={{ fontWeight:'500',fontSize: 15}}>City : {item.City}</Text></View>
           <View><Text style={{ fontWeight:'500',fontSize: 15}}>Pincode : {item.Pin}</Text></View>
           <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
           <TouchableOpacity style={{width:'30%',height:30,backgroundColor:'#fa8b0c', borderRadius: 20}}>
           <Text style={{textAlign:'center',marginTop:5}}>Edit Address</Text>
           </TouchableOpacity>
           </View> 

           
      
         </View>
        )
      }
