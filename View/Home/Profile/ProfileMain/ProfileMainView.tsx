import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, ImageBackground, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { userDetail } from '../../../../Models/User';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { BaseUrl } from '../../../../environment';

const ProfileMainView = ({navigation,Logout,user,}:ProfileViewProps) => {

     const [selectedImage, setSelectedImage] = useState<any>(null);

    const [isPopoverVisible, setPopoverVisible] = useState(false);
    
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const pickImageFromCamera  = async () => {

      let response = await ImagePicker.launchCamera({
        cameraType: 'back',
        mediaType: 'photo',
        quality: 0.7
      });
          if(!!response && !!response.assets && response.assets.length > 0){
          //  console.log("Image:...........",response.assets[0])
            const body: any = new FormData();
            body.append('image', {
           ...response.assets[0],
            name: response.assets[0].fileName,
          });
          // axios
          // .post('http://192.168.1.9:3000/api/v1/upload', formData, {
          //   headers: {
          //     // 'Content-Type': 'multipart/form-data',
          //     // Add any other headers your API endpoint expects
          //   },
          // })
          // .then((response) => {
          //   // Handle the response from your server
          //   console.log(response.data);
          //   toggleModal(); // Close the modal after picking and processing the image
          // })
          // .catch((error) => {
          //   // Handle errors
          //   console.error(error);
          // });
          try{
          let res = await fetch(BaseUrl+'/upload', {
            method: 'POST',
            body,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
         console.log("res",res)
         let json = await res.json();
         console.log("json",json)
          if (res.ok) {
            console.log("RESPONSE :",res);
          
            let json = await res.json();
            console.log("json",json)
          }
        }catch(err){
          console.log(err);
          
        }
            toggleModal(); 
          }
     
        //   if (response.didCancel) {
        //     // Handle cancel event
        //   } else if (response.error) {
        //     // Handle error
        //   } else {
        //     const selectedImage = response.assets[0];
        //     console.log(selectedImage);
        //   }
     
       
    //  });

    
  };

  // const pickImageFromGallery  = () => {
  //   const options = {
  //     title: 'Select Image',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.launchImageLibrary(options, response =>{
  //   console.log(response) ,
  //   setSelectedImage(response);
    //   if (response.didCancel) {
    //     // Handle cancel event
    //   } else if (response.error) {
    //     // Handle error
    //   } else {
    //     const selectedImage = response.assets[0];
    //     console.log(selectedImage);
    //   }
    // console.log("Image:...........",selectedImage?.assets[0])
//       const formData = new FormData();
//     formData.append('image', {
//       uri:  selectedImage?.assets[0]?.uri,
//       type: selectedImage?.assets[0]?.type,
//       name: selectedImage?.assets[0]?.fileName,
//     });
//     fetch('http://192.168.1.9:3000/api/v1/upload', {
//       method: 'POST',
//       body: formData,
//   // Add any other headers your API endpoint expects
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// })
//     // axios
//     // .post('http://192.168.1.9:3000/api/v1/upload', formData, {
//     //   headers: {
//     //     // 'Content-Type': 'multipart/form-data',
//     //     // Add any other headers your API endpoint expects
//     //   },
//     // })
//     .then((response) => {
//       // Handle the response from your server
//       console.log(response.formData);
//       toggleModal(); // Close the modal after picking and processing the image
//     })
//     .catch((error) => {
//       // Handle errors
//       console.error(error);
//     });

//         toggleModal();  });
//};

   
 // console.log(user?.customer_name);
    const handleRemovePress = () => {
      setPopoverVisible(true);
    };
  
    const handleCancel = () => {
      setPopoverVisible(false);
    };
  
    const handleConfirm = () => {
        Logout();
     // setPopoverVisible(false);
    };
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
    <View style={{width: 100,height: 100, borderRadius: 50,marginLeft:155}}>
    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU'}}
       style={{flex:1,borderRadius:50}} />
 
    </View>
    <TouchableOpacity style={{marginVertical:63,marginHorizontal:-59}} onPress={toggleModal} >
       <Icon name="create" size={20} color="black" />
    </TouchableOpacity>
    {toggleModal && (
              
      <Modal
      visible={showModal}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer1}>
        <View style={styles.modalContent1}>
          <TouchableOpacity
            style={styles.button1}
            onPress={pickImageFromCamera}
          >
            <Text style={{textAlign:'center'}}>Upload From Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
           // onPress={pickImageFromGallery}
          >
            <Text style={{textAlign:'center'}}>Upload From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton1}
            onPress={toggleModal}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
      )}
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
          {user?.customer_name}
        </Text>
        <Text
        style={{
          fontSize: 15,
          color: '#fa8b0c',
          textAlign: 'center'}}>
          {user?.customer_phone}
          </Text>
         
      
        </View> 
        <ScrollView>
        
        
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 10}} >
             <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
             <Icon name="create-outline" size={(25)} />
             <Text style={{fontSize:20, marginLeft:10}}>Manage Profile</Text>
             </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddressList')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 10}}>
             <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
             <Icon name="clipboard-outline" size={(25)} />
             <Text style={{fontSize:20, marginLeft:10}}>Address</Text>
             </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 10}}>
             <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
             <Icon name="bag-check-outline" size={(25)} />
             <Text style={{fontSize:20, marginLeft:10}}>Order History</Text>
             </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleRemovePress} style={{backgroundColor: '#f2f7f3',height:70,width:'95%', margin:10,borderRadius:10,elevation: 5}}>
             <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
             <Icon name="power-outline" size={(25)} />
             <Text style={{fontSize:20, marginLeft:10}}>Log Out</Text>
             </View>
          </TouchableOpacity>
          <Modal
      animationType="slide"
      transparent={true}
      visible={isPopoverVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Are you sure you want to Logout?</Text>
          <View style={styles.modalButtons}>
          <TouchableOpacity
              style={[styles.modalButton, styles.confirmButton]}
              onPress={handleConfirm}>
              <Text style={styles.modalButtonText}>Logout</Text>
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
        </ScrollView>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    marginVertical: 60,
    marginHorizontal: -15,
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent1: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width:250
  },
  button1: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fa8b0c',
    width:200
  },
  cancelButton1: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});
 
      
      
   

export default ProfileMainView
interface ProfileViewProps{ 
  navigation?:any;
  user?:userDetail;
  Logout?:any
 
}