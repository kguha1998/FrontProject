import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressListView from './AddressListView'
import { StoreState } from '../../../../Models/reduxModel'
import { AddressListAction } from '../../../../Stores/Actions/userAction'
import { connect } from 'react-redux'
import { addressList, userDetail } from '../../../../Models/User'

const AddressList = ({navigation,route,user,address,AddressListAction}:AddressListProps) => {
  const[address1,updateaddress]=useState<any>([])
  useEffect(()=>{
        AddressListAction(user?.customer_id);
   console.log(user?.customer_id)
  },[])
   
  return (
    <View>
     <AddressListView navigation={navigation} address={address} />
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
  AddressListAction
    
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);
interface AddressListProps {
  navigation?: any;
  route?: any;
  address?: addressList[];
  user?:userDetail;
  AddressListAction?: any;
  addr?:any;
 
}