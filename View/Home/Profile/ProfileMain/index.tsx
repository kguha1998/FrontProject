import { View, Text } from 'react-native'
import React from 'react'
import ProfileMainView from './ProfileMainView'
import { connect } from 'react-redux'
import { StoreState } from '../../../../Models/reduxModel'
import { UserLogoutSuccess } from '../../../../Stores/Actions/userAction'
import { userDetail } from '../../../../Models/User'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileMain = ({ navigation, user, UserLogoutSuccess }: ProfileMainProps) => {
  const Logout = (data: any) => {
    // Remove user details from AsyncStorage when logging out
    AsyncStorage.removeItem('user_details')
      .then(() => {
        console.log('User details removed from AsyncStorage');
      })
      .catch((error) => {
        console.error('Error removing user details from AsyncStorage:', error);
      });

    // Call the UserLogoutSuccess action
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain);

interface ProfileMainProps {
  navigation?: any;
  user?: userDetail;
  UserLogoutSuccess?: any;
}
