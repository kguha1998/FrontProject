import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { AddToCartAction, CommodityListAction} from '../../../../Stores/Actions/productAction';
import ChooseItemView1 from './ChooseItemView1';



const ChooseItem = ({navigation, route,productDetails,CommodityListAction,AddToCartAction,StoreProduct}:ChooseItemProps) => {
  
  const { product_id } = route.params;
  console.log(route.params,'param...................')

  const [childData, setChildData] = useState(null);

  useEffect(() => {
    CommodityListAction(product_id)
    }, []);

    const generateRandomId = () => {
      return Math.random().toString(36).substr(2, 10); // Generates a random alphanumeric ID
    };

    const AddToCart = (data:any) => {
      const randomId = generateRandomId();
      const myObject={
        'products':[{
          id: randomId,
          product_id:product_id,
          commodities: data,
          quantity:1,
         }]}
      AddToCartAction(myObject) 
      console.log('RANDOMMMMMMM', myObject) 
    };

    console.log(StoreProduct,'StoreLog.........')
  return (
    <View style={{flex: 1}}>
    {/* <ChooseItemView  navigation={navigation} route={route}  productDetails={productDetails}/> */}
    <ChooseItemView1  navigation={navigation} route={route}  productDetails={productDetails} AddToCart={AddToCart}/>
    {/* commodityId={onChildValue} */}
    </View>
  )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {

  return {
    productDetails: state.product.commodity_detail, 
    StoreProduct:state.product.Store_Product

    
  };

};
const mapDispatchToProps = {
  CommodityListAction ,  
  AddToCartAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseItem);
// export default (ChooseItem);
interface ChooseItemProps{
  navigation?: any;
  route?: any;
  commodity?:any;
  CommodityListAction?:any;
  productDetails?:any;
  AddToCart?:any
  AddToCartAction?:any
  StoreProduct?:any
 
}