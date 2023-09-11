import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ProfileView from './ProfileMainView'
import ProfileMainView from './ProfileMainView'
import { connect } from 'react-redux'
import { StoreState } from '../../../../Models/reduxModel'
import { UserDetailEditAction, UserDetailEditSuccessAction, UserLogoutSuccess } from '../../../../Stores/Actions/userAction'
import { userDetail } from '../../../../Models/User'
import { useFocusEffect } from '@react-navigation/native'

const ProfileMain = ({navigation,user,UserLogoutSuccess,UserDetailEditAction}:ProfileMainProps) => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     UserDetailEditAction(user)
  //  }, [])
  //  );

  //  useEffect(() => {
  //   UserDetailEditAction(user);
   
    
  //  }, []);
  console.log(user?.customer_name)
 // UserDetailEditAction(user);
 
//console.log(user?.customer_name)
  const Logout = (data: any) => {
    UserLogoutSuccess(user?.customer_id);
  }
    
   

  return (
    <ProfileMainView navigation={navigation} Logout={Logout} user={user} />
  )
  }
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
   
  };
};
const mapDispatchToProps = {
  UserLogoutSuccess,
  UserDetailEditAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain);

interface ProfileMainProps{
  navigation?: any;
  user?:userDetail;
  UserLogoutSuccess?:any
  UserDetailEditAction?:any
}