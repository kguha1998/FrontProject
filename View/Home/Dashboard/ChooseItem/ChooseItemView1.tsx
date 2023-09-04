import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ChooseItemView1 = ({
  navigation,
  productDetails,
  CartScreen,
  cartData,
  handleaddToCart,
  handleRemoveToCart,
}: ChooseItemView1porps) => {
  const [expandedCommodityTypeIndex, setExpandedCommodityTypeIndex] =
    useState(null);

  return (
    <View style={{}}>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 30,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <View style={{flexDirection: 'row', marginTop: 40, paddingRight: 70}}>
          <View style={{marginRight: 50}}>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseBox')}>
              <Icon name="arrow-back-circle" size={50} color={'white'} />
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <Text
              style={{
                color: 'white',
                fontSize: 27,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Choose Items
            </Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView >
         <View style={{paddingBottom:170}}>  
            <View style={styles.container}>
             {productDetails && (
              <View>
            {/* <Text style={{height:20,width:20,color:'black'}}>Product Name: {productDetails.product_name}</Text>
          <Text>Product Description: {productDetails.product_desc}</Text>
          <Text>Max Allowed Items: {productDetails.max_allowed_items}</Text>
          <Text>Commodity Types:</Text> */}
                 {productDetails.comodity_item.map(
                     (commodityType: any, index: any): any => (
                     <View key={index} >
                      <TouchableOpacity
                        style={styles.commodityTypeButton}
                         onPress={() => {
                      if (expandedCommodityTypeIndex === index) {
                        setExpandedCommodityTypeIndex(null);
                      } else {
                        setExpandedCommodityTypeIndex(index);
                      }
                    }}>
                     <View> 
                      <Text style={styles.commodityTypeName}>
                      {commodityType.commodity_type_name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Collapsible collapsed={expandedCommodityTypeIndex !== index}>
                    
                   <View >
                    <Text style={styles.maxItem}>Max Allowed Items : {commodityType.allowed_items}</Text>
                    <View style={{flexDirection:'column' }}>
                    {commodityType.commodities.map(
                      (commodity: any, cIndex: any) => (
                        <View key={cIndex} style={styles.commoditiesStyle}>
                          <View style={{marginBottom:20}}>
                          <Text style={styles.commodityDescription}>{commodity.commodity_name}</Text>
                          <Text style={styles.commodityDescription}>Quantity: {commodity.quantity}</Text>
                          <Text style={styles.commodityDescription}>
                            Measurement Unit: {commodity.measurement_unit}
                          </Text>
                          </View>
                          <View style={{flexDirection:'row',}}>
                            <View style={{}}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                              // handleaddToCart(commodity.commodity_name);
                              // // Handle button click for each commodity
                              // console.log(
                              //   'Button clicked for:',
                              //   commodity.commodity_name,
                              // );
                            }}>
                            <Text style={styles.buttonText}>Add to cart</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={{marginStart:70}}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                              // handleRemoveToCart(commodity.commodity_name);
                              // // Handle button click for each commodity
                              // console.log(
                              //   'Button clicked for:',
                              //   commodity.commodity_name,
                              // );
                            }}>
                            <Text style={styles.buttonText}>Remove</Text>
                          </TouchableOpacity>
                          </View>
                          </View>
                        </View>
                        
                      ),
                    )}
                    </View>
                    </View>
                  </Collapsible>
                  
                     </View>
              ),
            )}
          </View>
        )}
            </View>
         </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'orange',
    // elevation: 10,
    // backgroundColor: 'white',
    marginBottom: 50,
  },
  commodityTypeButton: {
    backgroundColor: 'orange',
    elevation: 10,
    borderRadius: 15,
    padding: 20,
    marginVertical:20,
    
  },
  commodityTypeName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    color:'white',
  },
  maxItem:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#Ff8f00', 
  },
  commoditiesStyle:{
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'orange',
    elevation: 15,
    backgroundColor: 'white',
  },
  commodityDescription:{
    fontSize: 15,
    color:'#Ff8f00', 
    fontWeight:'500'
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChooseItemView1;
interface ChooseItemView1porps {
  navigation?: any;
  route?: any;
  cartData?: any;
  handleaddToCart?: any;
  handleRemoveToCart?: any;
  productDetails?: any;
  CartScreen?:any
}
