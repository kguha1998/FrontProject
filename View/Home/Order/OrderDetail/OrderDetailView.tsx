import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

const OrderDetailView = ({ navigation, route }: OrderDetailViewProps) => {
  const [orderData, setOrderData] = useState<any>({
    order_id: 9,
    order_code: "BPK9QQIT904056",
    created_on: "2023-09-10T06:05:04.000Z",
    expected_delivery_date: "2023-09-11T06:05:04.000Z",
    products: [
      {
        product_name: "KWS Small Box",
        product_id: 66,
        commodities: [
          {
            commodity_name: "CAPSICUM GREEN",
            measurement_unit: "gm",
            quantity: 250
          },
          {
            commodity_name: "MUSROOM PC (Oyester Only)",
            measurement_unit: "gm",
            quantity: 200
          },
          {
            commodity_name: "LEMON LOOSE",
            measurement_unit: "pcs",
            quantity: 2
          },
          {
            commodity_name: "CHILLI LIGHT GREEN",
            measurement_unit: "gm",
            quantity: 150
          },
          {
            commodity_name: "CORIANDER",
            measurement_unit: "bundle",
            quantity: 1
          }
        ]
      }
    ],
    address: {
      house_no: "s524",
      address_line1: "NewTown",
      address_line2: "Kolkata",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      pin: "700000"
    },
    showCommodities: false, // Track whether to show commodities
  });

  const toggleCommodities = () => {
    setOrderData((prevData: any) => ({
      ...prevData,
      showCommodities: !prevData.showCommodities,
    }));
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderList')}
          style={styles.backButton}>
          <Icon name="arrow-back-outline" size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Details</Text>
      </LinearGradient>

      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri:
                'https://cdn4.iconfinder.com/data/icons/e-commerce-and-online-shopping-flat/512/delivery_hand_product_order_courier_box_service_shipping-512.png',
            }}
            style={styles.image}
          />
          <View style={styles.orderDetails}>
            <OrderDetailItem label="Order ID:" value={orderData.order_id} />
            <OrderDetailItem label="Order Code:" value={orderData.order_code} />
            <OrderDetailItem label="Created On:" value={orderData.created_on} />
            <OrderDetailItem
              label="Expected Delivery Date:"
              value={orderData.expected_delivery_date}
            />
          </View>
          <TouchableOpacity
            onPress={toggleCommodities}
            style={[
              styles.commoditiesButton,
              {
                backgroundColor: orderData.showCommodities
                  ? 'lightgray'
                  : 'transparent',
                borderColor: orderData.showCommodities
                  ? 'transparent'
                  : 'lightcoral',
              },
            ]}>
            <Text style={styles.commoditiesButtonText}>
              {orderData.showCommodities ? 'Hide Commodities' : 'Show Commodities'}
            </Text>
            <Icon
              name={orderData.showCommodities ? 'chevron-up' : 'chevron-down'} // Use chevron-up or chevron-down based on showCommodities
              size={20}
              color="blue"
            />
          </TouchableOpacity>
          {orderData.showCommodities && (
            <View style={styles.commoditiesContainer}>
              <Text style={styles.commodityHeader}>Order Products:</Text>
              {orderData.products.map((product:any, index:any) => (
                <View key={index} style={styles.productItem}>
                  <Text style={styles.productName}>{product.product_name}</Text>
                  <Text style={styles.productName}>
            Quantity: {product.commodities.length}
          </Text>
                  <Accordion items={product.commodities} />
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reorder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const OrderDetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <View style={styles.orderDetailItem}>
      <Text style={styles.orderDetailLabel}>{label}</Text>
      <Text style={styles.orderDetailValue}>{value}</Text>
    </View>
  );
};
//displays the commodity 
const Accordion = ({
  items,
}: {
  items: Array<{ commodity_name: string; measurement_unit: string; quantity: number }>;
}) => {
  return (
    <View style={styles.commoditiesContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.commodity}>
          <Text style={styles.commodityName}>{item.commodity_name}</Text>
          <Text style={styles.commodityDetails}>
            {item.quantity} {item.measurement_unit}
          </Text>
        </View>
        
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'orange',
    height: Dimensions.get('window').height * 0.2,
    paddingHorizontal: 20,
    paddingTop: 40,
    flexDirection: 'row',
  },
  backButton: {
    marginRight: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    margin: 20,
    alignItems: 'center',
    borderColor: 'lightcoral',
    borderWidth: 2,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
  orderDetails: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  commoditiesButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderColor: 'lightcoral',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commoditiesButtonText: {
    color: 'blue',
  },
  commoditiesContainer: {
    marginTop: 10,
  },
  commodityHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    marginVertical: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  orderDetailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDetailValue: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  commodity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    position: 'relative',
  },
  commodityUnderline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1, // Adjust the height as needed
    backgroundColor: 'lightcoral', // Add your desired underline color
  },
  commodityInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commodityName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  commodityDetails: {
    fontSize: 14,
    color: 'gray',
  },
  commodityIcon: {
    marginLeft: 10,
  }
});

interface OrderDetailViewProps {
  navigation?: any;
  route?: any;
  OrderDetailViewProps?: any;
}

export default OrderDetailView;
