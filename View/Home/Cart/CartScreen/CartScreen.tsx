import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Ionicons';


const CartMain = ({ data, incrementQuantity, decrementQuantity  }: CartMainProps) => {
  const [collapsed, setCollapsed] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      if (data) {
        
      } // For example, log a message when the screen is focused
    }, [data])
  );

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };




  return (
    <ScrollView>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 7 }}>
          <View style={{ marginTop: 22 }}>
            <Icon name="timer-outline" style={{ color: 'black' }} size={20} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'left',
                marginTop: 20,
                fontSize: 18,
                fontFamily: 'oswald',
                color: 'black',
              }}>
              Delivery in
            </Text>
          </View>
          <View style={{ marginLeft: 3 }}>
            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'left',
                marginTop: 20,
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'oswald',
                color: 'black',
              }}>
              15-20 Mins
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 10, alignItems: 'center' }}>
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
        </View>
      </View>
      <View style={{ margin: 10 }}>
        {data &&
          data.product &&
          data.product.length > 0 &&
          data.product.map((item: any) => (
            <View
              key={item.product_id}
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
                padding: 10,
                borderRadius: 8,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.productName}>{item.product_name}</Text>
                <TouchableOpacity onPress={() => incrementQuantity(item)}>
                  <Icon name="add-circle" style={styles.icon} size={24} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => decrementQuantity(item)}>
                  <Icon name="remove-circle" style={styles.icon2} size={24} />
                </TouchableOpacity>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Box Price: ₹{item.mrp}</Text>
                <Text style={styles.priceLabel}>
                  Total Price: ₹{item.quantity * item.selling_price}
                </Text>
              </View>
            </View>
          ))}
      </View>
      <TouchableOpacity onPress={toggleExpand} style={styles.showItemsContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.showItemsText}>Show Items</Text>
          <Icon
            name={collapsed ? 'chevron-down-outline' : 'chevron-up-outline'} // Replace with appropriate icons
            style={styles.showItemsIcon}
            size={24}
          />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.collapsibleContent}>
          {data &&
            data.product &&
            data.product.length > 0 &&
            data.product.map((item: any) => (
              <View key={item.product_id}>
                {item.commodities.map((commodity: any) => (
                  <Text key={commodity.commodity_id} style={styles.selectedItemText}>
                    {commodity.commodity_name}
                  </Text>
                ))}
              </View>
            ))}
        </View>
      </Collapsible>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', width: '95%' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              borderRadius: 8,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 17,
                height: 20,
                alignSelf: 'center',
                textAlign: 'center',
                fontFamily: 'oswald',
                fontWeight: '500',
              }}>
              SAVINGS CORNER
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              width: '95%',
              margin: 10,
              flexDirection: 'column',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 12, marginTop: 5 }}>
                Save 10%
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="gift" size={18} color="#f72d48" />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginLeft: 10,
                    marginTop: 5,
                    color: '#f72d48',
                  }}>
                  Apply
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: '300', fontSize: 15, marginLeft: 12, marginTop: 3 }}>
                Code: FO10
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
             
              padding: 10,
              borderRadius: 8,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 17,
                height: 20,
                alignSelf: 'center',
                textAlign: 'center',
                fontFamily: 'oswald',
                fontWeight: '500',
              }}>
              BILL SUMMARY
            </Text>
          </View>
          <View
            style={{
              height: 100,
              backgroundColor: 'white',
              margin: 10,
              flexDirection: 'column',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 10 }}>
                Discount
              </Text>
              <Text
                style={{
                  marginTop: 7,
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 270,
                }}>
                {data.totalDiscountPercentage}%
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 10 }}>
                Discount Amount
              </Text>
              <Text
                style={{
                  marginTop: 7,
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 213,
                }}>
                {data.totalDiscount}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{ marginTop: 7, color: 'black', fontSize: 15, marginLeft: 10 }}>
                Final Price:
              </Text>
              <Text
                style={{
                  marginTop: 7,
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 250
                }}>
                ₹{data.totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
    fontWeight: '500',
    flex: 1,
  },
  quantity: {
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceLabel: {
    fontSize: 15,
    color: 'black',
  },
  icon: {
    color: 'green',
  },
  icon2:{
    color: 'red'
  },
  showItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  showItemsText: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  showItemsIcon: {
    color: 'black',
  },
  collapsibleContent: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  selectedItemText: {
    fontSize: 16,
    marginBottom: 5, // Add margin between commodities
  },
});

export default CartMain;

export interface CartMainProps {
  data?: any;
  incrementQuantity: (item: any) => void;
  decrementQuantity: (item: any) => void;
}
