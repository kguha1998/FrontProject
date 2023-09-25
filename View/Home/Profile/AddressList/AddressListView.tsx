import { View, Text, TouchableOpacity, Dimensions, ScrollView, Modal,  StyleSheet, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';






const AddressListView = ({navigation,address,AddressDelete}:AddressListViewProps) => {
  

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
     height:50,
     margin: 20,
     marginTop: 30,
     paddingVertical: 10,
     paddingHorizontal: 10,
  }}>
      <TouchableOpacity onPress={() => navigation.navigate('AddressAdd')}>
        <Text style={{textAlign:"center",fontSize:20,fontWeight:'bold'}}>+Add Address</Text>
      </TouchableOpacity>
      </View> 
        {
          address?.map((m:any)=> (
            <AddressNew key={m.address_id} item={m} navigation={navigation} AddressDelete={AddressDelete}  />
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
    AddressDelete?: any
   
  }
  

  const AddressNew = ({ item, navigation, AddressDelete }: AddressNewProps) => {
    const [isPopoverVisible, setPopoverVisible] = useState(false);
    const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);
    

const togglePopover = () => {
  
  setPopoverVisible(!isPopoverVisible);
};

const toggleRemoveModal = () => {
  setRemoveModalVisible(!isRemoveModalVisible);
};

const handleRemovePress = () => {
  togglePopover();
  toggleRemoveModal(); // Show the Remove modal when "Remove" is pressed
};

const handleCancel = () => {
  toggleRemoveModal(); // Close the Remove modal when "Cancel" is pressed
};

const handleConfirm = () => {
  console.log('i am in handlefunction of child', item.address_id);
  AddressDelete(item.address_id);
  togglePopover();
  toggleRemoveModal(); 
};


 
    return (
   
      <View
      style={{
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
      }}>
      
      
        <Menu style={{ position: 'absolute', top: 10, right: 10 }}>
          <MenuTrigger>
            <Icon name="ellipsis-vertical-outline" size={20} color="#fa8b0c" />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={popupStyles.optionsContainer}>
            <MenuOption onSelect={() => navigation.navigate('AddressEdit', { address_id: item.address_id })}>
              <Text style={styles.menuText}>Edit</Text>
            </MenuOption>
            <MenuOption onSelect={handleRemovePress}>
              <Text style={styles.menuText}>Remove</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      
    {/* </View> */}
          <Modal
        animationType="slide"
        transparent={true}
        visible={isRemoveModalVisible}>
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
      
   
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.house_no}, {item.address_line1},</Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.address_line2}, {item.city}, {item.state},</Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.country}, {item.pin} </Text>
          </View>


          {/* <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Society Name: {item.address_line1}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Address: {item.address_line2}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>City : {item.city}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>State : {item.state}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Country : {item.country}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Pincode : {item.pin}</Text>
          </View> */}
        </View>
      
    );
  };
  const popupStyles = {
    optionsContainer: {
      backgroundColor: 'white', 
      borderRadius: 5, 
      padding: 10, 
      width: 150, 
  
      
    },
    
    optionText: {
      fontSize: 16, 
      color: 'black', 
      paddingVertical: 10, 
      paddingHorizontal: 20,
    },
  };

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
      padding: 30,
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
      borderRadius: 25,
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
    menuText: {
      fontSize: 16,
      color: 'black',
    },

   
  });
  interface AddressNewProps{ 
    navigation?:any;
    item?:any;
    AddressDelete?: any;
 
  }
  
