import {View, Text} from 'react-native';
import React, {useState} from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Address from './Address';
// import OrderConfirmation from './OrderConfirmation';
// import OrderSummary from './OrderSummary';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from './CartScreen';
import Address from './Address';
import OrderConfirmation from './OrderConfirmation';
import CartIndex from './CartScreen';

const Cart = () => {

  const [step, setStep] = useState<number>(0);
  console.log(step);

  const labels = ['Cart', 'Delivery Address', 'Order Confirmation'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };
  return (
    <View style={{flex: 1}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={step}
        labels={labels}
        stepCount={3}
        onPress={val => setStep(val)}
      />
      {step == 0 ? (
        <CartIndex setStep={setStep} />
      ) : step == 1 ? (
        <Address setStep={setStep}/>
      ) : (
        <OrderConfirmation/>
      )}
    </View>
    
  );
};

export default Cart;
