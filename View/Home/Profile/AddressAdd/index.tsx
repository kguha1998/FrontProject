import { View, Text } from 'react-native'
import React from 'react'
import AddressAddView from './AddressAddView'
import { StoreState } from '../../../../Models/reduxModel'
import { connect } from 'react-redux'
import { AddressAddAction } from '../../../../Stores/Actions/userAction'
import { addressList } from '../../../../Models/User'


const AddressAdd = ({navigation,route,AddressAddAction,user}:AddressAddProps) => {
  const AddressAdd = (data: any) => {
    AddressAddAction(data);
  };
  return (
    <View>
    <AddressAddView navigation={navigation} />
   </View>
 )
  
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.address_list
  };
};
const mapDispatchToProps = {
  AddressAddAction 
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressAdd);
interface AddressAddProps {
  navigation?: any;
  route?: any;
  user?: addressList[];
  AddressAddAction?: any;

 
}