import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderDetailView from './OrderDetailView'

const OrderDetail = ({navigation,route}:OrderDetailProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Simulate the progress of order status
    const interval = setInterval(() => {
      if (currentStep < 3) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <View >
      
      <OrderDetailView navigation={navigation}/>
     
    </View>



  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default OrderDetail
interface OrderDetailProps{
    navigation?: any;
    route?:any;
  }