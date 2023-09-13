import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const OrderConfirmation = ({ mode, onConfirm, navigation }: OrderConfirmationProps) => {
  const [selectedRadio, setSelectedRadio] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState('Soon Payments will be available');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (mode && mode.length > 0 && mode[0].domain_type) {
      setPaymentMethod(mode[0].domain_type);
    }
  }, [mode]);


  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(),
      // Show the modal when confirming the order
      setModalVisible(true);
      // Simulate a delay for order placement
      setTimeout(() => {
        // Redirect to 'Order' after a delay
        setModalVisible(false); // Close the modal
        navigation.navigate('Order'); // Replace 'Order' with your actual order page component name
      }, 2000); // Adjust the delay time as needed
    }
  };

  return (
    <View>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: Dimensions.get('window').height * 0.1,
          width: '100%',
          elevation: 25,
          alignItems: 'center',
          paddingTop: 25,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5,
          }}
        >
          Order Confirmation
        </Text>
      </LinearGradient>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          Select a Payment Method
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginLeft:10 , marginTop: 5,}}>
        <CustomRadioButton
            selected={selectedRadio === 2}
            onSelect={() => setSelectedRadio(2)}
          />
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginTop: 5,
                marginBottom: 5,
                marginLeft :5,
              }}
            >
              {paymentMethod}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleConfirm}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 30,
            backgroundColor: '#fa8b0c',
          }}
        >
          <Text style={{ color: 'white', fontSize: 19 }}>Place Order</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContent}>
          <LottieView
            source={require('./order_confirmation.json')}
            autoPlay={true} // Auto play the animation
            loop={false} // Play the animation only once
            style={{ width: 200, height: 200 }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // Modal background color set to white
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  confirmButton: {
    backgroundColor: '#fa8b0c',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default OrderConfirmation;
// Custom radio button component with a linear gradient background
const CustomRadioButton = ({ selected, onSelect }: any) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: selected ? '#fa8b0c' : 'gray', // Change border color based on selection
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: selected ? '#fa8b0c' : 'transparent', // Change background color based on selection
            height: 10,
            width: 10,
            borderRadius: 10,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};
export interface CustomRadioButton{
  selected?:any;
  onSelect?:any;
}

export interface OrderConfirmationProps {
  mode?: any;
  onConfirm?: any;
  navigation?: any;
}
