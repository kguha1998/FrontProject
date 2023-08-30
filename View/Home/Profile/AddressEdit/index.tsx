import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressEditView from './AddressEditView'
import { connect } from 'react-redux'
import { AddressEditAction, AddressFetchAction } from '../../../../Stores/Actions/userAction'
import { StoreState } from '../../../../Models/reduxModel'
import { SingleAddress, addressList, userDetail } from '../../../../Models/User'


  const AddressEdit = ({navigation,route,user,address,AddressFetchAction,singleaddress}:AddressEditProps) => {
    const { address_id } = route.params;
    console.log(singleaddress);
   // const[address1,updateaddress]=useState<any>([])
    useEffect(()=>{
    
       AddressFetchAction(singleaddress?.address_id) 
       console.log(AddressFetchAction)
       
    },[])
   // const AdreessEdit =(data: any) =>{
      //data.address_id = abc.address_id
    //}
  return (
    <View>
          <AddressEditView navigation={navigation} address={address} singleaddress={singleaddress} /> 
          
    </View>
  )
  
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
    address: state.user.address_list,
    singleaddress:state.user.single_address,


  };
};
const mapDispatchToProps = {
  AddressFetchAction,

};

export default connect(mapStateToProps, mapDispatchToProps)(AddressEdit);
interface AddressEditProps {
  navigation?: any;
  route?: any;
  address?: addressList[];
  user?:userDetail;
  AddressFetchAction?: any;
  singleaddress?:SingleAddress;
  

  
 
}

