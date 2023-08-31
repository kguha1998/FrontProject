import { View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChooseBoxView from './ChooseBoxView';
import { ProductDetail } from '../../../../Models/Product';
import { connect } from 'react-redux';
import { StoreState } from '../../../../Models/reduxModel';
import { ProductListAction } from '../../../../Stores/Actions/productAction';


const ChooseBox = ({navigation, route,product,ProductListAction}: ChooseBoxProps) => {
  const[productBox,setproductBox] =useState<any>([])
  useEffect(()=>{
    ProductListAction();
  }, []);

  return(
        <ChooseBoxView navigation={navigation} product={product}/>
        )
      }

      const mapStateToProps = (state: StoreState, ownProps: any) => {
        return {
         product: state.product.product_detail
        };
      };
      const mapDispatchToProps = {
        ProductListAction
          
      };
      export default connect(mapStateToProps, mapDispatchToProps)(ChooseBox);
      interface ChooseBoxProps{
        navigation?: any;
        route?: any;
        product?:ProductDetail[];
        ProductListAction?:any;
      }