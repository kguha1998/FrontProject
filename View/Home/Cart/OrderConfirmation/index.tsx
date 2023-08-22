import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const OrderConfirmation = () => {
  const [selectedRadio,setSelectedRadio] =useState(2)
  return (
    <View>
     <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          // borderBottomLeftRadius: 15,
          // borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.1,
          width: '100%',
          elevation: 25,
          alignItems: 'center',
          paddingTop: 25,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
          Order Confirmation
        </Text>
      </LinearGradient>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            marginTop: 5,
            marginBottom: 5,
            marginLeft:10
          }}>
          Select a Payment Method
        </Text>
        {/* Radio Button */}
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
          <View style={{height:30,width:30,borderColor:'black',borderWidth:2,borderRadius:20,margin:10}}>
          {
            selectedRadio===1 ? <View style={{backgroundColor:'blue',height:18,width:18,borderRadius:20,margin:4}}></View>:null
          }
            </View></TouchableOpacity>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 5,
              marginBottom: 5,
            }}>
            Online
          </Text>
        </View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
          <View style={{height:30,width:30,borderColor:'black',borderWidth:2,borderRadius:20,margin:10}}>
          {
            selectedRadio===2 ? <View style={{backgroundColor:'blue',height:18,width:18,borderRadius:20,margin:4}}></View>:null
          }
            </View></TouchableOpacity>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 5,
              marginBottom: 5,
            }}>
            Cash on delivery
          </Text>
        </View>
        </View>

        

       

        <TouchableOpacity
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 30,
            backgroundColor: '#fa8b0c',
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  radio:{
    height:40,width:40,borderColor:'black',borderWidth:2,borderRadius:20,margin:10
  }
})

export default OrderConfirmation;
