import { View, Text } from 'react-native'
import React from 'react'
import SignupView from './SignupView';
import { connect } from 'react-redux';
import { StoreState } from '../../../Models/reduxModel';
import { SignupAction } from '../../../Stores/Actions/userAction';
import { userDetail } from '../../../Models/User';


const Signup = ({navigation, route,SignupAction}:SignupProps)  => {

  const Signup = (data: any) => {
    SignupAction(data);
  }
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
}