import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderConfirmationPage1 = ({ navigation }:orderconfirmProps) => {
  // You can pass order details or any other data as props to this component

  const handleGoBack = () => {
    // Navigate back to the previous screen or close the confirmation page
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Display order details and confirmation message */}
      <Text style={styles.confirmationText}>Order Confirmed!</Text>
      {/* Display order details or other relevant information here */}
      
      {/* Button to go back to the previous screen */}
      <Button title="Go Back" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Add styles for other components as needed
});

export default OrderConfirmationPage1;
export interface orderconfirmProps{
    navigation?:any;
}
