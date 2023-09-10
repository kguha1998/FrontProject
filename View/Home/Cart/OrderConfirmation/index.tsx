import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import OrderConfirmation from './OrderConfirmView'
import { StoreState } from '../../../../Models/reduxModel'
import { PaymentModeAction } from '../../../../Stores/Actions/cartAction'
import { connect } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

const Pindex2 = ({PaymentModeAction,data,mode,orderdata}:PindexProps) => {
  const pmode:string="Cash On Delivery"
  //console.log("mode",mode)
  useFocusEffect(React.useCallback(()=>{
    PaymentModeAction(pmode);
  
  },[]))


  return (
    <View>
      <OrderConfirmation mode={mode} />
    </View>
  )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  //console.log(state);
  return {
    // user: state.user.user_detail,
    // data: state.CartMain.cartdata,
    mode:state.CartMain.PaymentMode
  };
};
const mapDispatchToProps = {
  PaymentModeAction ,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Pindex2)
export interface PindexProps{
  PaymentModeAction?:any;
  data?:any;
  mode?:any;
  orderdata?:any;
}