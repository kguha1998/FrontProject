import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { CommodityListAction} from '../../../../Stores/Actions/productAction';
import ChooseItemView from './ChooseItemView';
import ChooseItemView1 from './ChooseItemView1';


const ChooseItem = ({navigation, route,productDetails}:ChooseItemProps) => {
 
  useEffect(() => {
      // const { product } = route.params;
      const { product_id } = route.params;
      console.log("kkkkkkkkkkkkk",product_id)
    }, []);
  // const onChildValue =(data:any)=>{
  //   console.log("from commodityId.....................",data)
  //   CommodityListAction(data)
  //  }
  return (
    <View style={{flex: 1}}>
    {/* <ChooseItemView  navigation={navigation} /> */}
    <ChooseItemView1  navigation={navigation} route={route}  productDetails={productDetails}/>
    {/* commodityId={onChildValue} */}
    </View>
  )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {
  console.log("from props",state.product.commodity_detail)
  return {
    productDetails: state.product.commodity_detail
  };
};
const mapDispatchToProps = {
  CommodityListAction   
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseItem);
// export default (ChooseItem);
interface ChooseItemProps{
  navigation?: any;
  route?: any;
  commodity?:any;
  CommodityListAction?:any;
  productDetails?:any;
}