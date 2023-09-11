import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const OrderDetailView = ({ navigation, route }: OrderDetailViewProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.LinearGradientStyle}>
        <Text style={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}>
          Order Detail
        </Text>
      </LinearGradient>

      {/* <View style={styles.box}>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={{
              uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png',
            }}
            style={{ width: 150, height: 150, resizeMode: 'contain' }}
          />
          <Text style={styles.text}>Product Box</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>CARROT</Text>
            <Text>DRUMSTICK</Text>
            <Text>BITTER GOURD</Text>
            <Text>BOTTLE GOURD</Text>
            <Text>PUMPKIN RED</Text>
            <Text>SNAKE GOURD </Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text  style={styles. close_button}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      <View>
        <Text style={styles.TextStyle}>Thanks For Your Order, Sujata!</Text>
      </View>
      <View style={styles.CardStyle}>
       <Box/>
      </View>
      <View style={{flexDirection:'row'}}>
      
        <View style={styles.button}>
        <TouchableOpacity>
        <Text>ReOrder</Text>
        </TouchableOpacity>
        </View>
 
        <View style={styles.button}>
        <TouchableOpacity>
        <Text>Track Order</Text>
        </TouchableOpacity>
        </View>
       
       </View>
       <View style={styles.CardStyle}>
       <Details/>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderList')}
          style={styles.button}>
          <Text>Go back to Order List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Box=()=>{
  return(
    <View style={{flexDirection:'row'}}>
    <View>
    <Image
            source={{
              uri:'https://cdn4.iconfinder.com/data/icons/e-commerce-and-online-shopping-flat/512/delivery_hand_product_order_courier_box_service_shipping-512.png'
            }}
            style={{ width: 150, height: 150, resizeMode: 'contain' }}
          />
    </View>
    <View style={{padding:10}}>
      <View>
      <Text style={styles.TextStyle}>Box Name : </Text>
    </View>
    <View>
      <Text style={styles.TextStyle}>ItemName : </Text>
    </View>
    <View>
      <Text style={styles.TextStyle}>Traking Id:</Text>
    </View>
    <View>
      <Text style={styles.TextStyle}>Qty:</Text>
    </View>
    <View>
      <Text style={styles.TextStyle}>Total Order:</Text>
    </View>
    </View>
    </View>
  )
}

const Details =()=>{
 return(
  <View>
    <View>
    <View>
    <Image
            source={{
              uri:'https://cdn4.iconfinder.com/data/icons/e-commerce-and-online-shopping-flat/512/delivery_hand_product_order_courier_box_service_shipping-512.png'
            }}
            style={{ width: 150, height: 150, resizeMode: 'contain' }}
          />
    </View>
    <View>
      <Text style={styles.TextStyle}>Kundru</Text>
      </View>
    </View>
    <View>
    <View>
    <Image
            source={{
              uri:'https://cdn4.iconfinder.com/data/icons/e-commerce-and-online-shopping-flat/512/delivery_hand_product_order_courier_box_service_shipping-512.png'
            }}
            style={{ width: 150, height: 150, resizeMode: 'contain' }}
          />
    </View>
    <View>
      <Text style={styles.TextStyle}>Pointed Gaurd </Text>
      </View>
    </View>
    <View>
      <Text style={styles.TextStyle}>Tomatoes</Text>
    </View>
  </View>
 )
}

const styles = StyleSheet.create({
  LinearGradientStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  button: {
    marginBottom: 20,
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:30,
    width:150
  },
  close_button: {
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    elevation: 5,
    marginRight: 90,
    marginLeft: 90,
  },
  CardStyle: {
    marginTop: 20,
    marginLeft:20,
    marginRight:20,
    marginBottom:5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'orange',
    elevation: 10,
    backgroundColor: 'white',
  },
  TextStyle: {
    fontSize: 15,
    
  },
  // box: {
  //   width: 200,
  //   height: 200,
  //   backgroundColor: 'lightblue',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   shadowColor: 'gray',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.4,
  //   shadowRadius: 3,
  //   elevation: 5,
  //   marginLeft: 100,
  //   marginTop: 20,
  // },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141414',
    marginLeft: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

interface OrderDetailViewProps {
  navigation?: any;
  route?: any;
  OrderDetailViewProps?: any;
}

export default OrderDetailView;
