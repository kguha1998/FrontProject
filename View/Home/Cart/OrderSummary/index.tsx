import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const OrderSummary = (props: any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.setStep(1)}>
        <Text>Select Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummary;
