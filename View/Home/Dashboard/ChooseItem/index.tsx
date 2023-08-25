import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChooseItemView from './ChooseItemView';
import { StoreState } from '../../../../Models/reduxModel';
import { OrderAction } from '../../../../Stores/Actions/productAction';
import { connect } from 'react-redux';
import { orderDetail } from '../../../../Models/Product';


const ChooseItem = ({navigation, route,order,OrderAction}:ChooseItemProps) => {
  const[order1,updateorder]=useState<any>([])
  useEffect(()=>{
  OrderAction(order?.commodity_type_id) 
  },[])
  return (
    <View>
    <ChooseItemView  navigation={navigation} order={order}/>
    </View>
  )
}

const mapStateToProps=(state:StoreState,ownProps:any)=>{
  return{
    order: state.order.order_detail
  };
};

const mapDispatchToProps={
  OrderAction
};

export default connect(mapStateToProps,mapDispatchToProps)(ChooseItem);

interface ChooseItemProps{
  navigation?: any;
  route?: any;
  order:orderDetail[];
  OrderAction?:any;
}