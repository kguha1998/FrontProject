import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const CartMain = ({ data }: CartMainProps) => {
  const [collapsed, setCollapsed] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
    if (data) {
      // console.log('Data received:', data); // Ensure you're receiving the data correctly
    }
  }, [data]));

  if (!data || !data.product || data.product.length === 0) {
    return (
      <View>
        <Text>No items in the cart</Text>
      </View>
    );
  }

  const totalPrice = data.totalPrice;
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', marginLeft: 7 }}>
        <View style={{ marginTop: 22 }}>
          <Icon name="timer-outline" style={{ color: 'black' }} size={20} />
        </View>
        <View style={{ marginLeft: 5 }}><Text style={{
    alignSelf: 'center',
    textAlign: 'left',
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'oswald',
    color: 'black',}}>Delivery in</Text></View>
    <View style={{marginLeft:3}}><Text style={{
    alignSelf: 'center',
    textAlign: 'left',
    marginTop: 20,
    fontSize: 18,
    fontWeight:'bold',
    fontFamily: 'oswald',
    color: 'black',}}>15-20 Mins</Text></View>
    </View>
    <View>
      <Text
        style={{
          fontSize: 17,
          height: 20,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'oswald',
          fontWeight: '500',
        }}>
        ITEMS ADDED
      </Text>
      {data.product.map((item: any) => (
        <View
          key={item.product_id}
          style={{
            height: 170,
            width: '95%',
            backgroundColor: 'white',
            margin: 10,
            flexDirection: 'column',
          }}>
            <View style={{flexDirection:'column'}}>
          <View > 
            <Text
              style={{
                marginTop: 20,
                marginLeft: 15,
                color: 'black',
                fontSize: 20,
                fontWeight: '500',
              }}>
              {item.product_name}
            </Text>
          </View>
          <View style={{marginLeft: 0,}}>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 15,
                color: 'black',
                fontSize: 15,
                fontWeight: '500',
              }}>
              Box Price:{item.mrp}
            </Text>
          </View>
          </View>


          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              backgroundColor: 'white',
              width: '92%',
              marginRight: 50,
            }}>
            <Text
              style={{
                marginTop: 15,
                color: 'black',
                marginLeft: 10,
                fontSize: 15,
              }}>
              Quantity: {item.quantity}
            </Text>

            <View>
              <Text
                style={{
                  marginTop: 15,
                  color: 'black',
                  marginLeft: 110,
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                Total Price: ₹{item.quantity * item.selling_price}
              </Text>
            </View>
            <View style={{marginLeft: 10, marginTop: 10}}>
              <TouchableOpacity
                // onPress={() => removeFromCart()}
                style={{
                  borderRadius: 100,
                  width: 80,
                  alignSelf: 'center',
                  alignItems: 'center',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginLeft: 5,
                }}>
                <Icon name="trash-outline" style={{color: 'black'}} size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              flexDirection: 'column',
              marginLeft: 15,
              backgroundColor: 'white',
              width: '90%',
              marginRight: 50,
              marginTop: 5,
            }}>
            <TouchableOpacity onPress={toggleExpand}>
              <Text style={{fontWeight: 'bold'}}>Show Items</Text>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
              <View style={{width: '100%'}}>
                <Text>tomato</Text>
                <Text>tomato</Text>
                <Text>tomato</Text>
                <Text>tomato</Text>
                <Text>tomato</Text>
              </View>
            </Collapsible>
          </ScrollView>
        </View>
      ))}
      <View style={{marginRight:10,marginLeft:10,marginTop:15,marginEnd:10}}><Text
        style={{
          fontSize: 17,
          height: 30,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          // marginTop: 10,
          fontFamily: 'oswald',
          fontWeight: '500',
        }}>
        SAVINGS CORNER
      </Text></View>

      <View style={{backgroundColor: 'white',height: 60, width: '95%',margin:10,flexDirection:'column'}}>
      <View style={{flexDirection:'row' }}>
      <Text style={{fontWeight:'bold',fontSize:15,marginLeft:12,marginTop:5}}>Save 10% on First Order</Text>
      <Text style={{fontWeight:'bold',fontSize:15,marginLeft:165,marginTop:5,color:'#f72d48'}}>Apply</Text></View>
      <View><Text style={{fontWeight:'300',fontSize:15,marginLeft:12,marginTop:3}}>Code: FO10</Text></View>
      </View>
      <View style={{marginRight:10,marginLeft:10,marginTop:15,marginEnd:10}}><Text
        style={{
          fontSize: 17,
          height: 30,
          width: 320,
          alignSelf: 'center',
          textAlign: 'center',
          // marginTop: 10,
          fontFamily: 'oswald',
          fontWeight: '500',
        }}>
        BILL SUMMARY
      </Text></View>  
      <View
        style={{
          height: 100,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,
          flexDirection: 'column',
        }}>
        
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{marginTop: 7, color: 'black', fontSize: 15, marginLeft: 10}}>
            Discount
          </Text>
          <Text
            style={{
              marginTop: 7,
              color: 'black',
              fontSize: 15,
              marginLeft:278,
            }}>
            {data.totalDiscountPercentage}%
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{marginTop: 7, color: 'black', fontSize: 15, marginLeft: 10}}>
            Discount Amount
          </Text>
          <Text
            style={{
              marginTop: 7,
              color: 'black',
              fontSize: 15,
              marginLeft: 220,
            }}>
            {data.totalDiscount}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{marginTop: 7, color: 'black', fontSize: 15, marginLeft: 10}}>
            Final Price:
          </Text>
          <Text
            style={{
              marginTop: 7,
              color: 'black',
              fontSize: 15,
              marginLeft: 260,
            }}>
            ₹{data.totalPrice}
          </Text>
        </View>
      </View>
    </View>
    </View>
  );
};

export default CartMain;

export interface CartMainProps {
  data?: any;
}