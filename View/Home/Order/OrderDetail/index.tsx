import React, { useEffect, useState } from 'react';
import OrderDetailView from './OrderDetailView';
import { Text, View } from 'react-native';
import { StoreState } from '../../../../Models/reduxModel';
import { Order_DetailAction, Order_DetailSuccessAction } from '../../../../Stores/Actions/orderActions';
import { connect } from 'react-redux';
import { userDetail } from '../../../../Models/User';

const OrderDetail = ({ navigation, Order_DetailAction,updateState,Order_DetailSuccessAction,OrderAction,user,orderData, route ,order_detail_list}:OrderDetailProps) => {
  
console.log("prent...",orderData)

  const { order_id } = route.params;
  console.log(route.params,'order_id..........pppppppppppppp..........')
  
  useEffect(() => {
    Order_DetailAction(order_id)
    console.log(Order_DetailAction,'action!1111111111111111111111')
    }, []);

  // console.log("orderData from Details***",orderData)
  // useEffect(() =>{
  //   // will make the action call here to fetch order list 
  //   Order_DetailAction(user?.customer_id);
    
  //}, []);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Simulate the progress of order status
    const interval = setInterval(() => {
      if (currentStep < 3) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <View> 
     
 
    {orderData ? ( // Check if data is defined before rendering the child component
    <OrderDetailView navigation={navigation} orderData={orderData} order_id={order_id} route={route}  />
    ) : (
    <Text>Add order </Text> // Or display a loading message or handle this case as needed
    )}</View>
  );
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
    orderData: state.OrderMain.order_detail,
  };
};

const mapDispatchToProps = {
  Order_DetailAction,
  Order_DetailSuccessAction
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
export interface OrderDetailProps{
  navigation?: any;
  route?: any;
  Order_DetailAction?: any;
  user?: userDetail;
  order_detail_list?: any;
  Order_DetailSuccessAction?:any
  orderData?:any
  OrderAction?:any
  updateState?:any
}