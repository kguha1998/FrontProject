import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { CommodityListAction} from '../../../../Stores/Actions/productAction';
import ChooseItemView from './ChooseItemView';


const ChooseItem = ({navigation, route}:ChooseItemProps) => {
 
  // const commodityId =(data:any)=>{
  //   console.log("from commodityId.....................")
  //   CommodityListAction(data)
  //  }
  return (
    <View>
    <ChooseItemView  navigation={navigation} />
    {/* <ChooseItemView1  navigation={navigation} route={route} commodityId={commodityId} productDetails={productDetails}/> */}
    
    </View>
  )
}
// const mapStateToProps = (state: StoreState, ownProps: any) => {
//   console.log("from props",state.product.commodity_detail)
//   return {
//     productDetails: state.product.commodity_detail
//   };
// };
// const mapDispatchToProps = {
//   CommodityListAction   
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ChooseItem);
export default (ChooseItem);
interface ChooseItemProps{
  navigation?: any;
  route?: any;
  // commodity?:any;
  // CommodityListAction?:any;
  // productDetails?:any;
}