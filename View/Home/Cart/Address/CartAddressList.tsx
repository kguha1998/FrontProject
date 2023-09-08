import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const CartAddressList = ({ address, handleAddressSelection , navigation }: any) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSelectAddress = (addressId: any) => {
    // Update the selected address state
    setSelectedAddress(addressId);

    // Notify the parent component of the selected address
    handleAddressSelection(addressId);
  };

  return (
    <ScrollView>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 10,
          fontWeight: '500',
        }}>
        Select an Address
      </Text>
      {address?.map((item: any) => (
        <Address1
          key={item.address_id}
          item={item}
          isSelected={selectedAddress === item.address_id}
          handleSelectAddress={handleSelectAddress}
        />
      ))}
      <View
        style={{
          elevation: 10,
          backgroundColor: '#fa8b0c',
          borderRadius: 10,
          height: 50,
          margin: 20,
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>+Add Address</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

interface CartAddressList {
  address?: any;
  handleAddressSelection?:any
  navigation?:any
}

const Address1 = ({ item, isSelected, handleSelectAddress }: any) => {
  const handlePress = () => {
    handleSelectAddress(item.address_id);
  };

  return (
    <TouchableOpacity
      style={{
        padding: 16,
        borderRadius: 5,
        backgroundColor: isSelected ? '#3ade73' : 'white',
        elevation: 10,
        margin: 20,
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
      }}
      onPress={handlePress}
    >
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          House No: {item.house_no}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          Address : {item.address_line1}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          Society Name: {item.address_line2}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          City : {item.city}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          State : {item.state}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          Country : {item.country}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '500', fontSize: 18 }}>
          Pincode : {item.pin}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '30%',
            height: 30,
            backgroundColor: '#fa8b0c',
            borderRadius: 20,
          }}>
          <Text style={{ textAlign: 'center', marginTop: 5 }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartAddressList;
