import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import OrderListView from './OrderListView';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { Order_listAction, Order_listSuccessAction } from '../../../../Stores/Actions/orderActions';
import { userDetail } from '../../../../Models/User';
import { useFocusEffect } from '@react-navigation/native';

const OrderList = ({ navigation, Order_listAction,updateState,Order_listSuccessAction,OrderAction,user,orderData, route ,order_detail_list}: OrderListProps) => {
 console.log("orderData from parents",orderData)
  useEffect(() =>{
    // will make the action call here to fetch order list 
    Order_listAction(user?.customer_id);
  }, []);


  // useFocusEffect(React.useCallback(()=>{
  //   // Action call
  //  OrderAction(order_detail_list);

  // },[order_detail_list]))


  // useFocusEffect(React.useCallback(() => {
  //   if (orderData) {
  //     // If data has been fetched, update the state and send it to the parent
  //     updateState(orderData);
  //   }
  // }, [orderData, updateState]));



  return (
    <View> 
     
 
{orderData ? ( // Check if data is defined before rendering the child component
<OrderListView navigation={navigation} orderData={orderData}   />
) : (
<Text>Add items </Text> // Or display a loading message or handle this case as needed
)}</View>




  );
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
    //order_detail_list: state.OrderMain.order_list,
    orderData: state.OrderMain.order_list,
  };
};

const mapDispatchToProps = {
  Order_listAction,
  Order_listSuccessAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);

interface OrderListProps {
  navigation?: any;
  route?: any;
  Order_listAction?: any;
  user?: userDetail;
  order_detail_list?: any;
  Order_listSuccessAction?:any
  orderData?:any
  OrderAction?:any
  updateState?:any
}




