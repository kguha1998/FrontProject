import { View, Text } from 'react-native'
import React  from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import Address from './Address';
// import OrderConfirmation from './OrderConfirmation';
// import OrderSummary from './OrderSummary';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './CartScreen';

const Cart = () => {
  return(
    <CartScreen />
    )
  }
  // const Stack = createStackNavigator();
  // return (
  //   <Stack.Navigator screenOptions={{headerShown:false}}>
  //      <Stack.Screen name="Address" component={Address} />
  //      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
  //      <Stack.Screen name="OrderSummary" component={OrderSummary} />
  //   </Stack.Navigator>
 
// const Pages = ["Address","Order Confirmation","Order Summary"];

// const firstindicatorstyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize:30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 3,
//   stepStrokeCurrentColor: '#fe7013',
//   stepStrokeWidth: 3,
//   stepStrokeFinishedColor: '#fe7013',
//   stepStrokeUnFinishedColor: '#aaaaaa',
//   separatorFinishedColor: '#fe7013',
//   separatorUnFinishedColor: '#aaaaaa',
//   stepIndicatorFinishedColor: '#fe7013',
//   stepIndicatorUnFinishedColor: '#ffffff',
//   stepIndicatorCurrentColor: '#ffffff',
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: '#fe7013',
//   stepIndicatorLabelFinishedColor: '#ffffff',
//   stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#fe7013'
// }
// const secondindicatorstyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize:30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 3,
//   stepStrokeCurrentColor: '#fe7013',
//   stepStrokeWidth: 3,
//   stepStrokeFinishedColor: '#fe7013',
//   stepStrokeUnFinishedColor: '#aaaaaa',
//   separatorFinishedColor: '#fe7013',
//   separatorUnFinishedColor: '#aaaaaa',
//   stepIndicatorFinishedColor: '#fe7013',
//   stepIndicatorUnFinishedColor: '#ffffff',
//   stepIndicatorCurrentColor: '#ffffff',
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: '#fe7013',
//   stepIndicatorLabelFinishedColor: '#ffffff',
//   stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#fe7013'
// }
// const thirdindicatorstyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize:30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 3,
//   stepStrokeCurrentColor: '#fe7013',
//   stepStrokeWidth: 3,
//   stepStrokeFinishedColor: '#fe7013',
//   stepStrokeUnFinishedColor: '#aaaaaa',
//   separatorFinishedColor: '#fe7013',
//   separatorUnFinishedColor: '#aaaaaa',
//   stepIndicatorFinishedColor: '#fe7013',
//   stepIndicatorUnFinishedColor: '#ffffff',
//   stepIndicatorCurrentColor: '#ffffff',
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: '#fe7013',
//   stepIndicatorLabelFinishedColor: '#ffffff',
//   stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#fe7013'
// }; 
 
// const getStepIndicatorIconConfig = {{position, stepStatus}} => {
//   const iconConfig = {
//     name:'Adress',
//     color: stepStatus ==='finished' ? '#ffffff'
//   }
// }



export default Cart


