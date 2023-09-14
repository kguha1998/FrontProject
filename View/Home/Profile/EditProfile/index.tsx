import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import EditProfileView from './EditProfileView'
import { StoreState } from '../../../../Models/reduxModel'
import { connect } from 'react-redux'
import { UserEdit, userDetail } from '../../../../Models/User'
import { UserDetailEditAction, UserDetailFetchAction } from '../../../../Stores/Actions/userAction'
import { useFocusEffect } from '@react-navigation/native'

const EditProfile = ({navigation,route,user,UserDetailFetchAction,UserDetailEditAction,useredit}:EditProfileProps) => {

  useEffect(()=>{
    UserDetailFetchAction(user?.customer_id) 
   
},[])
  const EditUserDetail = (data: any) => {
      const id =user?.customer_id
      console.log("Component",id)
    data.customer_id= user?.customer_id
    const payload={
      id:id,
      data:data,
      navigation:navigation,
       }
    UserDetailEditAction(payload);
};
  return (
    <EditProfileView navigation={navigation} EditUserDetail={EditUserDetail} user={user}  />
  )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail
  };
};
const mapDispatchToProps = {
  UserDetailFetchAction,
  UserDetailEditAction
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

interface EditProfileProps{ 
    navigation?:any;
    route?:any;
    user?: userDetail;
    useredit?:UserEdit;
    UserDetailFetchAction?:any;
    UserDetailEditAction?:any
  }