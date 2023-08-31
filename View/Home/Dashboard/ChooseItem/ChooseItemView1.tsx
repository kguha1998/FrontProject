import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Collapsible from 'react-native-collapsible';

const ProductDetail = ({ navigation, route ,productDetails,commodityId}: any) => {
  const { product } = route.params;
  console.log("p............",product.product.product_id)
  commodityId(product.product_id)

  //const [productDetails, setProductDetails] = useState<any>(null);
  const [expandedCommodityTypeIndex, setExpandedCommodityTypeIndex] = useState<any>(null);
  useEffect(() => {commodityId(product.product_id)}, []);
  
  /* useEffect(() => {
    axios
      .get(`http://192.168.1.5:3000/api/v1/products/17`)
      .then(response => {
        const fetchedProductDetails = response.data;
        console.log(fetchedProductDetails);

        setProductDetails(fetchedProductDetails);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [product.product_id]);
 */
  return (
    <View style={styles.container}>
      {productDetails && (
        <View>
          <Text>Product Name: {productDetails.product_name}</Text>
          <Text>Product Description: {productDetails.product_desc}</Text>
          <Text>Max Allowed Items: {productDetails.max_allowed_items}</Text>
          <Text>Commodity Types:</Text>
          {productDetails.comodity_item.map(
            (commodityType: any, index: number) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.commodityTypeButton}
                  onPress={() => {
                    if (expandedCommodityTypeIndex === index) {
                      setExpandedCommodityTypeIndex(null);
                    } else {
                      setExpandedCommodityTypeIndex(index);
                    }
                  }}>
                  <Text style={styles.commodityTypeName}>
                    {commodityType.commodity_type_name}
                  </Text>
                </TouchableOpacity>
                <Collapsible collapsed={expandedCommodityTypeIndex !== index}>
                  <Text>Max Allowed: {commodityType.allowed_items}</Text>
                  {commodityType.commodities.map(
                    (commodity: any, cIndex: number) => (
                      <View key={cIndex}>
                        <Text>{commodity.commodity_name}</Text>
                        <Text>Quantity: {commodity.quantity}</Text>
                        <Text>Measurement Unit: {commodity.measurement_unit}</Text>
                      </View>
                    )
                  )}
                </Collapsible>
              </View>
            )
          )}
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
});

export default ProductDetail;
