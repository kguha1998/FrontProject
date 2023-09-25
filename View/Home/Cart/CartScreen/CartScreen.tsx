import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Ionicons';


const CartMain = ({ data, incrementQuantity, decrementQuantity  }: CartMainProps) => {
 // console.log(JSON.stringify(data))
 // Calculate today's date + 1 day
 const currentDate = new Date();
 currentDate.setDate(currentDate.getDate() + 1);
 const deliveryDate = currentDate.toLocaleDateString('en-US', {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
 });
  const [collapsed, setCollapsed] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      if (data) {
        // console.log('Data received:', data); // Ensure you're receiving the data correctly
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
          <View style={{ marginTop: 22 , marginLeft: 2}}>
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
              {deliveryDate}
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
                  Total Price: ₹{item.selling_price}
                </Text>
              </View>
              <TouchableOpacity onPress={toggleExpand} style={styles.showItemsContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
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
    {item.commodities.map((commodity: any) => (
      <View key={commodity.commodity_id} style={styles.commodityItem}>
        <Text style={styles.commodityName}>
          {commodity.commodity_name}
        </Text>
        <View style={styles.quantityUnitContainer}>
          <Text style={styles.commodityQuantity}>
            ({commodity.quantity}
          </Text>
          <Text style={styles.commodityUnit}>
            {commodity.unit_name})
          </Text>
        </View>
      </View>
    ))}
  </View>
</Collapsible>
            </View>
            
          ))}
      </View>

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', width: '100%' , marginBottom:10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              borderRadius: 8,
              margin: 5,
              marginTop:-10
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
              borderRadius:2,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 12, marginTop: 5, marginRight:250 }}>
                Save 10%
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="gift" size={18} color="#dba614" />
                <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginLeft: 2,
                    marginTop: 1,
                    color: '#dba614',
                  }}>
                  Apply
                </Text>
                </TouchableOpacity>
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
              padding: 5,
              borderRadius: 8,
              margin: 5,
              marginTop:0
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
                Final Price
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
    paddingTop:2,
    borderRadius: 8,
    margin: 5,
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
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  commodityContainer: {
    flexDirection: 'column', // Display commodities vertically
  },
  commodityItem: {
    flexDirection: 'row', // Display commodity name, quantity, and unit horizontally
    alignItems: 'center', // Center items vertically
    marginBottom: 10, // Add space between each commodity
  },
  commodityName: {
    fontSize: 12,
    marginRight: 15, // Add space between commodity name and quantity/unit
  },
  quantityUnitContainer: {
    flexDirection: 'row', // Display quantity and unit horizontally
    alignItems: 'center', // Center items vertically
  },
  commodityQuantity: {
    fontSize: 12,
    marginRight: 4, // Add space between quantity and unit
  },
  commodityUnit: {
    fontSize: 12,
  },
});

export default CartMain;

export interface CartMainProps {
  data?: any;
  incrementQuantity: (item: any) => void;
  decrementQuantity: (item: any) => void;
}