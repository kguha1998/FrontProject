import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartMain = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'KSW Mini Box', price: 250, quantity: 1 },
    { id: '2', name: 'KSW Small Box', price: 350, quantity: 2 },
    { id: '3', name: 'KSW Large Box', price: 500, quantity: 3 },
  ]);

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
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <View>
      {cartItems.map((item) => (
        <View
          key={item.id}
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
              {item.name}
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
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                height: 20,
                width: 20,
                borderRadius: 9,
                margin: 20,
                marginTop: 20,
              }}
              onPress={() => decrementQuantity(item.id)}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                -
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                marginTop: 20,
                color: 'black',
                marginRight: 10,
              }}
            >
              {item.quantity}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                height: 20,
                width: 20,
                borderRadius: 9,
                margin: 10,
                marginTop: 20,
              }}
              onPress={() => incrementQuantity(item.id)}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                }}
              >
                +
              </Text>
            </TouchableOpacity>

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
                ₹{item.price}
              </Text>
            </View>

            <View style={{ marginLeft: 10, marginTop: 9 }}>
              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
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
                <Icon name="trash-outline" style={{ color: 'black' }} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text>Show Items</Text>
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
            Total Price:
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartMain;
