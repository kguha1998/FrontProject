import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AddressItem from './AddressItem';

const AddressPage: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const addresses = [
    'Rajarhat',
    'Newtown',
    'Kolkata',
  ];

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
  };

  const renderItem = ({ item }: { item: string }) => (
    <AddressItem
      address={item}
      onSelect={() => handleAddressSelect(item)}
      isSelected={selectedAddress === item}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select an Address</Text>
      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
      <Text style={styles.selectedAddress}>
        Selected Address: {selectedAddress || 'None'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedAddress: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default AddressPage;
