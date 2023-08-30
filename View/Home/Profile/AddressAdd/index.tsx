import { View, Text } from 'react-native'
import React from 'react'
import AddressAddView from './AddressAddView'
import { StoreState } from '../../../../Models/reduxModel'
import { connect } from 'react-redux'
import { AddressAddAction } from '../../../../Stores/Actions/userAction'
import { addressList, userDetail } from '../../../../Models/User'


const AddressAdd = ({navigation,route,AddressAddAction,user}:AddressAddProps) => {
  const AddressAdd = (data: any) => {
        data.customer_id= user?.customer_id
    AddressAddAction({
      data:data,
      navigation: navigation,
    });
  };
  return (
    <View>
    <AddressAddView navigation={navigation} AddressAdd={AddressAdd} />
   </View>
 )
  
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail
  };
};
const mapDispatchToProps = {
  AddressAddAction 
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressAdd);
interface AddressAddProps {
  navigation?: any;
  route?: any;
  user?: userDetail;
  AddressAddAction?: any;

 
}