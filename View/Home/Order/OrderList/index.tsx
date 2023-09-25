import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import OrderListView from './OrderListView';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { Order_listAction, Order_listSuccessAction } from '../../../../Stores/Actions/orderActions';
import { userDetail } from '../../../../Models/User';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const OrderList = ({ navigation, Order_listAction,updateState,Order_listSuccessAction,OrderAction,user,orderData, route ,order_detail_list}: OrderListProps) => {
 console.log("orderData from parents***",orderData)
  useEffect(() =>{
    // will make the action call here to fetch order list 
    Order_listAction(user?.customer_id);
  }, []);
  return (
    <View> 
   
 
{orderData ? ( // Check if data is defined before rendering the child component
<OrderListView navigation={navigation} orderData={orderData}   />
) : (
  <View>
  <LinearGradient
  colors={['#FFB900', '#FFE435', '#FFA000']}
  start={{x: 0, y: 0}}
  end={{x: 1, y: 0}}
  style={styles.LinearGradientStyle}>
  <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>
    Order List
  </Text>
</LinearGradient>
  
<Text>Add items </Text> // Or display a loading message or handle this case as needed
</View>
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

const styles = StyleSheet.create({
  LinearGradientStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
});



