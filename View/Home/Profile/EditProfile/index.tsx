import { View, Text } from 'react-native'
import React from 'react'

import EditProfileView from './EditProfileView'
import { StoreState } from '../../../../Models/reduxModel'
import { connect } from 'react-redux'
import { userDetail } from '../../../../Models/User'
import { UserDetailEditAction } from '../../../../Stores/Actions/userAction'

const EditProfile = ({navigation,route,user,UserDetailEditAction}:EditProfileProps) => {

  const EditUserDetail = (data: any) => {
      const id =user?.customer_id
      console.log("Component",id)
    data.customer_id= user?.customer_id
    // console.log("Component",user?.customer_id)
    // console.log("Data",data),
    const payload={
      id:id,
      data:data,
       }
    UserDetailEditAction(payload);
};
  return (
    <EditProfileView navigation={navigation} EditUserDetail={EditUserDetail} />
  )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail
  };
};
const mapDispatchToProps = {
  UserDetailEditAction
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

interface EditProfileProps{ 
    navigation?:any;
    route?:any;
    user?: userDetail;
    UserDetailEditAction?:any
  }