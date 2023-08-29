import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const CartScreen = (props: any) => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Small Box', price: 250, quantity: 1 },
    { id: '2', name: 'Medium Box', price: 300, quantity: 2 },
    { id: '3', name: 'Large Box', price: 500, quantity: 3 },
  ]);
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const incrementQuantity = (itemId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const renderCartItem = ({ item }) => (
    <View>
      
      <Text  style={{
          height: 80,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,flexDirection:'row'}}>{item.name}</Text>
      <View>
        <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text>{item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
        <LinearGradient
          colors={['#FFB900', '#FFE435', '#FFA000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
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
        <View>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}/>
      <Text>Total: {calculateTotalPrice()}</Text>
      </View>

        <View>
          {/* <View>
      <View
        style={{
          height: 80,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,flexDirection:'row'
        }}>
        <View >
          <Image
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
            style={{height: 80, width: 80}}
          />
        </View>
        <View>
          <Text style={{marginTop:30,color:'black',fontSize:20}}>Small Box</Text>
        </View>
       <View style={{marginLeft:30}}>
       <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:20,marginTop:35}}>
        <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>-</Text>
       </TouchableOpacity>
        </View>
        <View><Text style={{marginTop:35,color:'black',marginRight:10}}>1</Text></View>
       <View style={{marginRight:10}}>
       <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:10,marginTop:35}}>
       <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>+</Text>
       </TouchableOpacity>
       </View>
       <View><Text style={{marginTop:35,color:'black',marginLeft:7}}>₹200</Text></View>
      </View>
      </View>
    <View>
      <View
        style={{
          height: 80,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,flexDirection:'row'
        }}>
        <View >
          <Image
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
            style={{height: 80, width: 80}}
          />
        </View>
        <View>
          <Text style={{marginTop:30,color:'black',fontSize:20}}>Medium Box</Text>
        </View>
       <View style={{marginLeft:7}}>
       <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:20,marginTop:35}}>
        <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>-</Text>
       </TouchableOpacity>
        </View>
        <View><Text style={{marginTop:35,color:'black',marginRight:10}}>2</Text></View>
       <View style={{marginRight:10}}>
       <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:10,marginTop:35}}>
       <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>+</Text>
       </TouchableOpacity>
       </View>
       <View><Text style={{marginTop:35,color:'black',marginLeft:7}}>₹600</Text></View>
      </View>
      </View>
    <View>
      <View
        style={{
          height: 80,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,flexDirection:'row'
        }}>
        <View >
          <Image
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
            style={{height: 80, width: 80}}
          />
        </View>
        <View>
          <Text style={{marginTop:30,color:'black',fontSize:20}}>Large Box</Text>
        </View>
       <View style={{marginLeft:28}}>
       <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:20,marginTop:35}}>
        <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>-</Text>
       </TouchableOpacity>
        </View>
        <View><Text style={{marginTop:35,color:'black',marginRight:10}}>3</Text></View>
       <View style={{marginRight:10}}>
       <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:10,marginTop:35}}>
       <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>+</Text>
       </TouchableOpacity>
       </View>
       <View><Text style={{marginTop:35,color:'black',marginLeft:2}}>₹1500</Text></View>
      </View>
      </View>

      <View style={{
          height: 140,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,flexDirection:'column'
        }}>
        <View><Text style={{marginTop:5,color:'black',fontSize:23,fontWeight:'bold'}}>Bill Details</Text></View>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:7,color:'black',fontSize:17}}>Total Price</Text>
          <Text style={{marginTop:7,color:'black',fontSize:17,marginLeft:240}}>₹2300</Text>
          </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:7,color:'black',fontSize:17}}>Discount</Text>
          <Text style={{marginTop:7,color:'black',fontSize:17,marginLeft:270}}>20%</Text></View>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:7,color:'black',fontSize:17}}>Final Price</Text>
          <Text style={{marginTop:7,color:'black',fontSize:17,marginLeft:240}}>₹1840</Text>
          </View> */}
        </View>



        <View>
          <TouchableOpacity
            onPress={() => props.setStep(1)}
            style={{
              borderRadius: 100,
              width: 150,
              alignSelf: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              marginTop: 50,
              marginBottom: 30,
              backgroundColor: '#fa8b0c',
            }}>
            <Text style={{ color: 'white', fontSize: 19 }}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
  );
};
export default CartScreen;
