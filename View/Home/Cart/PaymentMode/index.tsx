import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import OrderConfirmation from './PaymentModeView'
import { StoreState } from '../../../../Models/reduxModel'
import { PaymentModeAction, PlaceOrderAction } from '../../../../Stores/Actions/cartAction'
import { connect } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

const Pindex = ({PaymentModeAction,data,mode,orderdata, navigation,PlaceOrderAction }:PindexProps) => {
  const pmode:string="Cash On Delivery"
  //console.log("mode",mode)
  useFocusEffect(React.useCallback(()=>{
    PaymentModeAction(pmode);
  
  },[]))
  const refactoredData = {
    "customer_id": orderdata.customer_id,
    "address_id": orderdata.address_id,
    "products": orderdata.product.map((product:any) => ({
      "product_id": product.product_id,
      "quantity": product.quantity,
      "unit_price": product.selling_price,
      "commodities": product.commodities.map((commodity:any) => ({
        "commodity_id": commodity.commodity_id,
        "measurement_unit": commodity.measurement_unit,
        "quantity": commodity.quantity,
      })),
    })),
  };
  const handleOrderConfirmation = () => {
    console.log("i am orderdata in parent",refactoredData)
   
    // Call the 'Placeorder' action here
    PlaceOrderAction(refactoredData);
  };
  return (
    <View>
      <OrderConfirmation mode={mode} onConfirm={handleOrderConfirmation} navigation={navigation}/>
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
  PlaceOrderAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pindex)
export interface PindexProps{
  PaymentModeAction?:any;
  data?:any;
  mode?:any;
  orderdata?:any;
  navigation?:any;
  PlaceOrderAction?:any
}