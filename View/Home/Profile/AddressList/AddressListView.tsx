import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'


const AddressListView = ({navigation,route,address}:AddressListViewProps) => {

    
    
    // const[address,updateaddress]=useState<any>([])
    // useEffect(()=>{
      // try{
      //   axios.get('http://192.168.1.8:3000/api/v1/addresses/cust/2').then((response: { data: any; })=>{
      //     updateaddress(response.data);
      //   }).catch((err:any)=>{
      //     console.log(err);
      //   })
      // }catch(err){
      //   console.log(err);
      // }
   // },[])
    
  return (
    <View>
      <LinearGradient
    
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      marginBottom:-50,
      height: Dimensions.get('window').height * 0.2,
      width: '100%',
      paddingTop: 20,
    }}>
    <View style={{flexDirection:'row',marginLeft:10}}>
    
    <TouchableOpacity onPress={() => navigation.navigate('ProfileMain')}>
    <Icon name="arrow-back-outline" size={(30)}color={'white'}/>
    </TouchableOpacity>
   
    <Text style={{color: 'white', fontSize: 25,textAlign:'center',marginLeft:40}}>
      Manage Your Address
    </Text>
    </View>
   
  </LinearGradient>
  <ScrollView>
  <View style={{
     elevation: 10,
     backgroundColor: '#e2e82c',
     borderRadius: 10,
     height:70,
     margin: 20,
     marginTop: 30,
     paddingVertical: 20,
     paddingHorizontal: 15,}}>
      <TouchableOpacity onPress={() => navigation.navigate('AddressAdd')}>
        <Text style={{textAlign:"center",fontSize:18}}>+Add Address</Text>
      </TouchableOpacity>
      </View> 
        {
          address.map((m:any)=> (
            <AddressNew key={m.address_id} item={m}/>
          ))
        }
         
      </ScrollView>
      </View>
     
  )
}

export default AddressListView
interface AddressListViewProps{ 
    navigation?:any;
    route?:any;
    address?:any

    
   
  }
  

  const AddressNew =({item}: any)=>{ 
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
     paddingHorizontal: 15,}}>



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





 





   

