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
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}>
          Order Detail
        </Text>
      </LinearGradient>
    <TouchableOpacity onPress={()=>navigation.navigate('OrderList')} 
    style={styles.button}>
        <Text>
          Go back to Order List Page
        </Text>
    </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  button: {
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
  close_button: {
    marginTop: 10,
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
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: 100,
    marginTop: 20,
  },
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
