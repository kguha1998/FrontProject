import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import CartMain from './CartScreen'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { StoreState } from '../../../../Models/reduxModel'
import { CartItemAction } from '../../../../Stores/Actions/cartAction'
import { userDetail } from '../../../../Models/User'
import { cartdata, cartitem, product } from '../../../../Models/Cart'

const CartIndex = ({setStep,cart,user,CartItemAction }: CartIndexProps) => {
  console.log("i am from index component",cart)
 useEffect(()=>{
  CartItemAction(cart);
 },[])
  return (
    <ScrollView>
        <LinearGradient
          colors={['#FFB900', '#FFE435', '#FFA000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            height: Dimensions.get('window').height * 0.1,
            width: '100%',
            elevation: 25,
            alignItems: 'center',
            paddingTop: 25,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            CART
          </Text>
        </LinearGradient>
        <View><CartMain /></View>
        
    <View>
      <TouchableOpacity
        onPress={() => setStep(1)}
        style={{
          borderRadius: 100,
          width: 150,
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: 5,
          marginTop: 25,
          marginBottom: 30,
          backgroundColor: '#fa8b0c',
        }}>
        <Text style={{ color: 'white', fontSize: 19 }}>Next</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
   cart:  state.cart,
  };
};
const mapDispatchToProps = {
  CartItemAction 
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)


export interface CartIndexProps{
  setStep:(step :1) =>void;
  user?: userDetail;
  cart?: cartitem[];
 // cartMain?: cartdata[];
  CartItemAction?:any
}