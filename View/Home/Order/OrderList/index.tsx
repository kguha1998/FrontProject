import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import OrderListView from './OrderListView';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { Order_listAction, Order_listSuccessAction } from '../../../../Stores/Actions/orderActions';
import { userDetail } from '../../../../Models/User';

const OrderList = ({ navigation, Order_listAction,Order_listSuccessAction,user, order_detail_list, route }: OrderListProps) => {
 
  useEffect(() =>{
    // will make the action call here to fetch order list 
    Order_listAction(user?.customer_id);
  }, []);

  return (
    <View>
     
        <OrderListView navigation={navigation} order_detail_list={order_detail_list} />
     
        
     
    </View>
  );
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
    order_detail_list: state.OrderMain.order_list,
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
}
