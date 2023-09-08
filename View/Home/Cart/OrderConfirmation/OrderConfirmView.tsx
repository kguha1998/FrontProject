import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Modal,
  BackHandler, // Import BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OrderConfirmation = ({ mode }: OrderConfirmationProps) => {
  console.log("child data", mode);
  const [selectedRadio, setSelectedRadio] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState("apple");
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  useEffect(() => {
    if (mode && mode.length > 0 && mode[0].domain_type) {
      setPaymentMethod(mode[0].domain_type);
    }
  }, [mode]);

  const handleRemovePress = () => {
    setPopoverVisible(true);
  };

  const handleCancel = () => {
    setPopoverVisible(false);
  };

  const handleConfirm = () => {
    // Add your logic to confirm the order here
    // After confirming the order, you can close the modal
    setPopoverVisible(false);
  };

  // Handle Android back button when the modal is open
  useEffect(() => {
    const backAction = () => {
      if (isPopoverVisible) {
        setPopoverVisible(false);
        return true; // Prevent default behavior (exit the app)
      }
      return false; // Let the default behavior occur
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup the event listener

  }, [isPopoverVisible]);

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
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
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
          }}>
          Select a Payment Method
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setSelectedRadio(2)}>
            <View
              style={{
                height: 30,
                width: 30,
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 20,
                margin: 10,
              }}>
              {selectedRadio === 2 ? (
                <View
                  style={{
                    backgroundColor: 'blue',
                    height: 18,
                    width: 18,
                    borderRadius: 20,
                    margin: 4,
                  }}
                />
              ) : null}
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginTop: 5,
                marginBottom: 5,
              }}>
              {paymentMethod}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleRemovePress}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 350,
            marginBottom: 30,
            backgroundColor: '#fa8b0c',
          }}>
          <Text style={{ color: 'white', fontSize: 19 }}>Confirm Order</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade" // Add fade animation
          transparent={true}
          visible={isPopoverVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Are you sure you want to confirm the order?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={handleConfirm}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={handleCancel}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 40,
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
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  confirmButton: {
    backgroundColor: '#fa8b0c',
  },
  modalButtonText: {
    color: 'white',
  },
});

export default OrderConfirmation;

export interface OrderConfirmationProps {
  mode?: any;
}
