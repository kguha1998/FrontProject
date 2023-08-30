import { View, Text, TouchableOpacity, Dimensions, ScrollView, Modal, Alert, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'




const AddressListView = ({navigation,route,address}:AddressListViewProps) => {
  

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
  <ScrollView style={{paddingBottom:100,marginBottom:220}}>
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
            <AddressNew key={m.address_id} item={m} navigation={navigation}/>
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
  

  const AddressNew =({item,navigation,route}: AddressNewProps )=>{ 
    // const [modalVisible, setModalVisible] = useState(false);
    const [isPopoverVisible, setPopoverVisible] = useState(false);

    const handleRemovePress = () => {
      setPopoverVisible(true);
    };
  
    const handleCancel = () => {
      setPopoverVisible(false);
    };
  
    const handleConfirm = () => {
      // Perform the actual delete action here
      setPopoverVisible(false);
    };

     

    //const address_id = item.address_id;
     //console.log(address_id)
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
       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
       <TouchableOpacity style={{width:'30%',height:30,backgroundColor:'#fa8b0c', borderRadius: 20,marginRight:10}}
       onPress={() => navigation.navigate('AddressEdit',{ address_id: item.address_id })}>
       <Text style={{textAlign:'center',marginTop:5}}>Edit</Text>
       </TouchableOpacity>

       <TouchableOpacity
        style={styles.button}
        onPress={handleRemovePress}>
       <Text style={{textAlign:'center',marginTop:5}}>Remove</Text>
       </TouchableOpacity>
       <Modal
        animationType="slide"
        transparent={true}
        visible={isPopoverVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure you want to delete?</Text>
            <View style={styles.modalButtons}>
            <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirm}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancel}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </Modal>
    
       </View> 
  
     </View>
    )
  }
 
  const styles = StyleSheet.create({
    button: {
      width: '30%', 
      height: 30, 
      backgroundColor: '#fa8b0c', 
      borderRadius: 20
    
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      marginTop: 20,
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    cancelButton: {
      backgroundColor: 'gray',
    },
    confirmButton: {
      backgroundColor: '#fa8b0c',
    },
    modalButtonText: {
      color: 'white',
    },
  });
  


  interface AddressNewProps{ 
    navigation?:any;
    route?:any;
    item?:any

    
   
  }



 





   

