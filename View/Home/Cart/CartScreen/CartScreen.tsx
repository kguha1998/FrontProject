import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartMain = ({ data }: CartMainProps) => {
  if (!data || !data.products || data.products.length === 0) {
    return (
      <View>
        <Text>No items in the cart</Text>
      </View>
    );
  }

  const totalPrice = data.products.reduce((total:any, item:any) => {
    return total + item.quantity * item.product_price;
  }, 0);

  return (
    <View>
      {data.products.map((item: any) => (
        <View
          key={item.product_id}
          style={{
            height: 140,
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
              }}
            >
              {item.product_name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 0,
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            <Text
              style={{
                marginTop: 20,
                color: 'black',
                marginRight: 10,
              }}
            >
              Quantity: {item.quantity}
            </Text>

            <View>
              <Text
                style={{
                  marginTop: 20,
                  color: 'black',
                  marginLeft: 115,
                  fontWeight: '500',
                  fontSize: 15,
                }}
              >
                Total Price: ₹{item.quantity * item.product_price}
              </Text>
            </View>
          </View>
        </View>
      ))}

      <View
        style={{
          height: 80,
          width: '95%',
          backgroundColor: 'white',
          margin: 10,
          flexDirection: 'column',
        }}
      >
        <View>
          <Text
            style={{
              marginTop: 5,
              color: 'black',
              fontSize: 23,
              fontWeight: 'bold',
            }}
          >
            Bill Details
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 7, color: 'black', fontSize: 17 }}>
            Total Price: ₹{totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartMain;

export interface CartMainProps {
  data?: any;
}
