import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import SignupView from './SignupView';
import { connect } from 'react-redux';
import { StoreState } from '../../../Models/reduxModel';
import { SignupAction } from '../../../Stores/Actions/userAction';
import { userDetail } from '../../../Models/User';



const Signup = ({navigation,SignupAction}:SignupProps)  => {
  
   
  // const Signup = async (data: any) => {
  //  // SignupErrorCleanAction(); // Call SignupErrorCleanAction() first
  
  //   try {
  //     //await SignupErrorCleanAction();
  //      await SignupAction({
  //       data: data,
  //     });
  //   // await SignupErrorAction();
  
  //     // setTimeout(() => {
  //     //   handleNavigation();
  //     // }, 10000); // Change the delay time (in milliseconds) as needed
      
  //       console.log("Signup Error", error);
  //     } catch (error) {
  //       console.error("Error logging:", error);
  //     }
  
      
  //     // setTimeout(() => {
  //     //   handleNavigation();
  //     // }, 2000); // Change the delay time (in milliseconds) as needed
     
  // }
  

      
  const Signup =  (data: any,navigation:any) => {
    
       SignupAction({
        data: data,
        navigation:navigation
      });
    }

      // After SignupAction completes without an error, you can call SignupErrorAction
  //     await SignupErrorAction();

  //   //   console.log("Signup was successful.");
  //   } catch (error) {
  //    console.error("Signup failed with error:", error);
  //  }

  //   // After both actions are complete, call handleNavigation
  //   handleNavigation();
  
   

  
// console.log("Signup Error",error);
//  const handleNavigation = () => {
//   if (error==="exists") {
//     // Error is present, show a message and navigate to Login
//     console.log("error",error)
//     ToastAndroid.show('Already Registered!', ToastAndroid.LONG);
//     navigation.navigate('Login');
//   } else {
//     // No error, signup was successful, show a success message and navigate to Login
//     console.log("no error",error)
//     ToastAndroid.show('Successfully Signed Up!', ToastAndroid.LONG);
//     navigation.navigate('Login');
//   }
// }; 

  

  return (
   
    <SignupView  navigation={navigation} Signup={Signup} />   
  )
  
  }
  const mapStateToProps = (state: StoreState, ownProps: any) => {
    return {
      user: state.user.user_detail,
    
    };
  };
  const mapDispatchToProps = {
    SignupAction,
   
  };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

interface SignupProps{
  navigation?: any;
  route?: any;
  user?: userDetail;
  SignupAction?:any;
  SignupErrorAction?:any
  error?:any
  SignupErrorCleanAction?:any
}