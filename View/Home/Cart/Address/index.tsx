import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { AddressListAction } from '../../../../Stores/Actions/userAction';
import { addressList, userDetail } from '../../../../Models/User';
import CartAddressList from './CartAddressList';


const Address = ({route,user,address,AddressListAction,props,setStep}:AddressListProps) => {
  const[address1,updateaddress]=useState<any>([])
  useEffect(()=>{
    AddressListAction(user?.customer_id);
    console.log(user?.customer_id)
  },[])


  // In the Address component or its parent component
const handleAddressSelection = (addressId:any) => {
  // Do something with the selected addressId in the parent component
  console.log(`Selected Address ID: ${addressId}`);
};

// Render the CartAddressList component and pass the callback function as a prop


  
  return (
  <ScrollView>
    <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      // borderBottomLeftRadius: 15,
      // borderBottomRightRadius: 15,
      height: Dimensions.get('window').height * 0.1,
      width: '100%',
      elevation: 25,
      alignItems: 'center',
      paddingTop: 25,
    }}>
    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold',marginBottom:5}}>
      Delivery Address
    </Text>
  </LinearGradient>
    <View>
    <CartAddressList address={address}  handleAddressSelection={handleAddressSelection} />
   
  
    </View>
    <View>
      <TouchableOpacity onPress={() => setStep(2)} 
      style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 30,
            backgroundColor:'#fa8b0c'
          }}>
        <Text style={{color: 'white', fontSize: 19}}>Next</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
};

const mapStateToProps = (state: StoreState, ownProps: any) => {

  return {
    user: state.user.user_detail,
    address: state.user.address_list

  };
};
const mapDispatchToProps = {
  AddressListAction 
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
interface AddressListProps {
  navigation?: any;
  route?: any;
  address?: addressList[];
  user?:userDetail,
  AddressListAction?: any;
  props?:any;
  setStep:(step :2) =>void;
  handleAddressSelection?:any
}