import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const CartMain = ({ data }: CartMainProps) => {
  const [collapsed, setCollapsed] = useState(true);
console.log("i am in cartmain",data)
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

  // Check if data is available and contains products
  if (!data || !data.product || data.product.length === 0) {
    return (
      <View>
        <Text>No items in the cart</Text>
      </View>
    );
  }

  const totalPrice = data.product.reduce((total:any, item:any) => {
    return total + item.quantity * item.selling_price;
  }, 0);

  return (
    <View>
      {data.product.map((item:any) => (
        <View
          key={item.product_id}
          style={{
            height: 170,
            width: '95%',
            backgroundColor: 'white',
            margin: 10,
            flexDirection: 'column',
          }}
        >
          <View>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 15,
                color: 'black',
                fontSize: 20,
                fontWeight: '500',
              }}
            >
              {item.product_name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              backgroundColor: 'white',
              width: '92%',
              marginRight: 50,
            }}
          >
            <Text
              style={{
                marginTop: 20,
                color: 'black',
                marginLeft: 10,
                fontSize: 15,
              }}
            >
              Quantity: {item.quantity}{/* needs to be rectfied*/ }
            </Text>

            <View>
              <Text
                style={{
                  marginTop: 20,
                  color: 'black',
                  marginLeft: 90,
                  fontWeight: '500',
                  fontSize: 15,
                }}
              >
                Total Price: ₹{item.quantity * item.selling_price}
              </Text>
            </View>
            <View style={{ marginLeft: 10, marginTop: 15 }}>
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
                }}
              >
                <Icon name="trash-outline" style={{ color: 'black' }} size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              flexDirection: 'column',
              marginLeft: 25,
              backgroundColor: 'white',
              width: '90%',
              marginRight: 50,
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={toggleExpand}>
              <Text style={{ fontWeight: 'bold' }}>Show Items</Text>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
              <View style={{ width: '100%' }}>
                {/* Render the items */}
                {item.commodities.map((commodity:any, index:any) => (
                  <Text key={index}>{commodity}</Text>
                ))}
              </View>
            </Collapsible>
          </ScrollView>
        </View>
      ))}

      <View
        style={{
          height: 130,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,
          flexDirection: 'column',
        }}
      >
        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              marginTop: 5,
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 5,
            }}
          >
            Bill Details
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 5 }}>
            Discount
          </Text>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 285 }}>
            {data.totalDiscountPercentage}%
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 5 }}>
            Discount Amount
          </Text>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 220 }}>
            {data.totalDiscount}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 5 }}>
            Final Price:
          </Text>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 250 }}>
            ₹{data.totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartMain;

export interface CartMainProps {
  data?: any;
  //updateState?:any;
}
