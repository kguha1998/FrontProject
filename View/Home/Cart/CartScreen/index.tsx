import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartMain from './CartScreen'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { StoreState } from '../../../../Models/reduxModel'
import { CartItemAction } from '../../../../Stores/Actions/cartAction'
import { userDetail } from '../../../../Models/User'
import { cartdata, cartitem, product } from '../../../../Models/Cart'
import { useFocusEffect } from '@react-navigation/native'


const CartIndex = ({setStep,CartItemAction,data,defaultProductData,updateState,orderdata  }: CartIndexProps) => {
  //const [fetchedData, setFetchedData] = useState({});
  useFocusEffect(React.useCallback(()=>{
    // Action call
   CartItemAction(defaultProductData);

  },[CartItemAction]))
  
  useFocusEffect(React.useCallback(() => {
    if (data) {
      // If data has been fetched, update the state and send it to the parent
      updateState(data);
    }
  }, [data, updateState]));
 
  const incrementQuantity = (item: any) => {
    const newQuantity = item.quantity + 1;
    const product_id =item.product_id;
  // Create the updated products array
  const updatedProducts = defaultProductData.products.map((product:any) =>
    product.product_id === product_id ? { ...product, quantity: newQuantity } : product
  );
 // Create the data in the desired format
  const updatedData = {
    "products": updatedProducts,
  };
  console.log("after increment print",updatedProducts) // Dispatch your action
  CartItemAction(updatedData);
  };

  const decrementQuantity = (item: any) => {
    //if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      const product_id =item.product_id;
      const updatedProducts = defaultProductData.products.map((product:any)=>
        product_id.product_id == product_id ? {...product, quantity:newQuantity} :product
        );
        const updatedData ={
          "products": updatedProducts,
        };
        CartItemAction(updatedData);
  //  }
  };

  return (
    <ScrollView>
        <LinearGradient
          colors={['#FFB900', '#FFE435', '#FFA000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            height: Dimensions.get('window').height * 0.1,
            width: '100%',
            elevation: 25,
            alignItems: 'center',
            paddingTop: 25,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            CART
          </Text>
        </LinearGradient>
        <View>{data ? ( // Check if data is defined before rendering the child component
          <CartMain data={data}  incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
        ) : (
          <Text>Loading data...</Text> // Or display a loading message or handle this case as needed
        )}</View>
        
    <View>
      <TouchableOpacity
        onPress={() => setStep(1)}
        style={{
          borderRadius: 100,
          width: 150,
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: 5,
          marginTop: 25,
          marginBottom: 30,
          backgroundColor: '#fa8b0c',
        }}>
        <Text style={{ color: 'white', fontSize: 19 }}>Next</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    )
}
const mapStateToProps = (state: StoreState, ownProps: any) => {

  return {
    user: state.user.user_detail,
    data: state.CartMain.cartdata,
    defaultProductData :state.product.Store_Product,

  };
};
const mapDispatchToProps = {
  CartItemAction ,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)


export interface CartIndexProps{
  setStep:(step :1) =>void;
  user?: userDetail;
  defaultProductData?: any;
  cartMain?: cartdata[];
  CartItemAction?:any;
  data?: any;
  updateState?:any;
  orderdata?:any;
}