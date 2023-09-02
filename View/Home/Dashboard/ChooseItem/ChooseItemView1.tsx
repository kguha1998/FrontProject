import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Collapsible from 'react-native-collapsible';
import { StoreState } from '../../../../Models/reduxModel';
import { connect } from 'react-redux';


const ChooseItemView1 = ({productDetails,cartData,handleaddToCart,handleRemoveToCart}:ChooseItemView1porps) => {

  const [expandedCommodityTypeIndex, setExpandedCommodityTypeIndex] = useState(null);



  return (
    <View style={styles.container}>
      {productDetails && (
        <View>
          <Text>Product Name: {productDetails.product_name}</Text>
          <Text>Product Description: {productDetails.product_desc}</Text>
          <Text>Max Allowed Items: {productDetails.max_allowed_items}</Text>
          <Text>Commodity Types:</Text>
          {productDetails.comodity_item.map((commodityType:any, index:any):any=> (
            <View key={index}>
              <TouchableOpacity
                style={styles.commodityTypeButton}
                onPress={() => {
                  if (expandedCommodityTypeIndex === index) {
                    setExpandedCommodityTypeIndex(null);
                  } else {
                    setExpandedCommodityTypeIndex(index);
                  }
                }}
              >
                <Text style={styles.commodityTypeName}>
                  {commodityType.commodity_type_name}
                </Text>
              </TouchableOpacity>
              <Collapsible collapsed={expandedCommodityTypeIndex !== index}>
              <Text>Max Allowed:{commodityType.allowed_items}</Text>
                {commodityType.commodities.map((commodity:any, cIndex:any) => (
                  <View key={cIndex}>
                  
                    <Text>{commodity.commodity_name}</Text>
                    <Text>Quantity: {commodity.quantity}</Text>
                    <Text>Measurement Unit: {commodity.measurement_unit}</Text>
                    <TouchableOpacity
                      style={styles.button} 
                      onPress={() => {
                        handleaddToCart(commodity.commodity_name)
                        // Handle button click for each commodity
                        console.log('Button clicked for:', commodity.commodity_name);
                      }}
                    >
                      <Text>Add to cart</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button} 
                      onPress={() => {
                        handleRemoveToCart(commodity.commodity_name)
                        // Handle button click for each commodity
                        console.log('Button clicked for:', commodity.commodity_name);
                      }}
                    >
                      <Text>Remove from Cart</Text> 
                    </TouchableOpacity>
                    
                  </View>
                ))}
              </Collapsible>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  commodityTypeButton: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  commodityTypeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
 

export default ChooseItemView1;
interface ChooseItemView1porps{
  navigation?: any;
  route?: any;
  cartData?: any;
  handleaddToCart?: any;
  handleRemoveToCart?: any;
  productDetails?:any;
}