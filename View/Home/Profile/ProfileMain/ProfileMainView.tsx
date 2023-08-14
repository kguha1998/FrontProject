import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileMainView = ({navigation,route}:ProfileViewProps) => {
  return (
    <View>
  <View>
  <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height: Dimensions.get('window').height * 0.2,
      width: '100%',
      paddingTop: 20,
    }}>
    <View style={{flexDirection:'row'}}>
    <View>
    <Text style={{color: 'white', fontSize: 31,textAlign:'left',marginLeft:20}}>
      My 
    </Text>
    <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold',textAlign:'left',marginLeft:20}}>
      Profile
    </Text>
    </View>
    <View style={{width: 80,height: 80, backgroundColor: '#fff', borderRadius: 50,marginLeft:180}}></View>
    </View>
  </LinearGradient>
  </View>
 
 
  <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 20,
          marginTop: -30,
          paddingVertical: 20,
          //paddingHorizontal: 15,
        }}>
          <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#fa8b0c',
            textAlign: 'center',
          }}>
          Krishna Guha
        </Text>
        <Text
        style={{
          fontSize: 15,
          color: '#fa8b0c',
          textAlign: 'center'}}>
          9876543210</Text>
      
        </View> 
        <ScrollView>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,marginTop:30,elevation: 10}}>
               <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
               <Icon name="create-outline" size={(25)} />
               <Text style={{fontSize:20, marginLeft:10}}>Edit Profile</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddressList')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 10}}>
               <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
               <Icon name="clipboard-outline" size={(25)} />
               <Text style={{fontSize:20, marginLeft:10}}>Address</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 10}}>
               <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
               <Icon name="bag-check-outline" size={(25)} />
               <Text style={{fontSize:20, marginLeft:10}}>Order History</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 10}}>
               <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
               <Icon name="power-outline" size={(25)} />
               <Text style={{fontSize:20, marginLeft:10}}>Log Out</Text>
               </View>
            </TouchableOpacity>
          
          
          </View>
          </ScrollView>
          </View>
          
          
          
  
 
        
     
   
  
  

  )
}

 
      
      
   

export default ProfileMainView
interface ProfileViewProps{ 
  navigation?:any;
  route?:any;
}