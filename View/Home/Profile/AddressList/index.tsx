import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressListView from './AddressListView'
import { StoreState } from '../../../../Models/reduxModel'
import {AddressDeleteAction, AddressListAction } from '../../../../Stores/Actions/userAction'
import { connect } from 'react-redux'
import { addressList, userDetail } from '../../../../Models/User'

const AddressList = ({navigation,user,address,AddressListAction,AddressDeleteAction}:AddressListProps) => {
  

  useEffect(()=>{
        AddressListAction(user?.customer_id);
   console.log(user?.customer_id)
  },[])
   const AddressDelete=(id: number)=>{
    AddressDeleteAction({
      customer_id: user?.customer_id,
      address_id: id
    })
   }
  return (
    <View>
     <AddressListView AddressDelete={AddressDelete} navigation={navigation} address={address}  />
    </View>
  )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
    address: state.user.address_list
  };
};
const mapDispatchToProps = {
  AddressListAction,
  AddressDeleteAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);
interface AddressListProps {
  navigation?: any;
  address?: addressList[];
  user?:userDetail;
  AddressListAction?: any;
  AddressDeleteAction?: any;
  
  
 
}