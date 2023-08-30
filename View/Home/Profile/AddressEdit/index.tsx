import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressEditView from './AddressEditView'
import { connect } from 'react-redux'
import { AddressEditAction, AddressFetchAction } from '../../../../Stores/Actions/userAction'
import { StoreState } from '../../../../Models/reduxModel'
import { SingleAddress, addressList, userDetail } from '../../../../Models/User'


  const AddressEdit = ({navigation,route,address,AddressFetchAction,singleaddress,AddressEditAction}:AddressEditProps) => {
   // console.log(singleaddress)
    const { address_id } = route.params;

    useEffect(()=>{
        AddressFetchAction(address_id) 
       
    },[])
    const AddressEdit = (data: any) => {
        //data.address_id = address_id
        const payload={
          address_id:address_id,
          data:data,
          navigation:navigation

        }
   
    AddressEditAction(payload);
};

  //  const AdreessEdit =(data: any) =>{
  //     data.address_id = abc.address_id
   
  //   }
  return (
    <View>
          <AddressEditView navigation={navigation} singleaddress={singleaddress} AddressEdit={AddressEdit}  /> 
          
    </View>
  )
  
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {

    address: state.user.address_list,
    singleaddress: state.user.single_address,


  };
};
const mapDispatchToProps = {
  AddressFetchAction,
  AddressEditAction,

};

export default connect(mapStateToProps, mapDispatchToProps)(AddressEdit);
interface AddressEditProps {
  navigation?: any;
  route?: any;
  address?: addressList[];
  AddressFetchAction?: any;
  singleaddress?:SingleAddress;
  AddressEditAction?:any
 
 


  

  
 
}

