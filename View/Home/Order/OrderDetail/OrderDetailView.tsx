import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderDetailView = ({ navigation, route, orderData, order_id }: OrderDetailViewProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
 // const [commodityNames, setCommodityNames] = useState<{ name: string; weight: number }[]>([]);
 const [commodityInfo, setCommodityInfo] = useState<{ name: string; weight: number ;measurement_unit:string}[]>([]);


  const toggleModal = () => {
    if (!isModalVisible) {
      const firstOrder = orderData[0];
      if (firstOrder && firstOrder.products && firstOrder.products.length > 0) {
        const firstProduct = firstOrder.products[0];
        if (firstProduct && firstProduct.commodities && firstProduct.commodities.length > 0) {
          const commodityInfo = firstProduct.commodities.map(commodity => ({
            name: commodity.commodity_name,
            weight: commodity.quantity, // Replace 'weight' with the actual property name in your data
            measurement_unit: commodity.measurement_unit, // Replace 'weight' with the actual property name in your data
          }));
          setCommodityInfo(commodityInfo);
        }
      }
    }
    setModalVisible(!isModalVisible);
  };
  

  const formatDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
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
      {orderData && (
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
              <OrderDetailItem label="Order ID:" value={orderData[0]?.order_id} />
              <OrderDetailItem label="Order Code:" value={orderData[0]?.order_code} />
              <OrderDetailItem label="Created On:" value={formatDate(orderData[0]?.created_on)} />
              <OrderDetailItem
                label="Expected Delivery Date:"
                value={formatDate(orderData[0]?.expected_delivery_date)}
              />
            </View>
            <TouchableOpacity
              onPress={toggleModal}
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
                name={orderData.showCommodities ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="blue"
              />
            </TouchableOpacity>
            <Modal visible={isModalVisible} animationIn="slideInUp" animationOut="slideOutDown">
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Commodities</Text>
      {commodityInfo.map((info, index) => (
        <Text key={index} style={styles.modalItem}>
          {info.name} - Weight: {info.weight} {info.measurement_unit}
        </Text>
      ))}
                  <TouchableOpacity onPress={toggleModal} style={styles.button}>
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {orderData[0]?.showCommodities && (
              <View style={styles.commoditiesContainer}>
                <Text style={styles.commodityHeader}>Order Products:</Text>
                {orderData[0]?.products.map((product: any, index: any) => (
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
              </View>
      )}
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
    height: 1,
    backgroundColor: 'lightcoral',
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});


interface OrderDetailViewProps {
  navigation?: any;
  route?: any;
  OrderDetailViewProps?: any;
  orderData?:any;
  order_id?:any
}

export default OrderDetailView;
