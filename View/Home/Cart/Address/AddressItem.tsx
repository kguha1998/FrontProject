import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AddressItemProps {
  address: string;
  onSelect: () => void;
  isSelected: boolean;
}

const AddressItem: React.FC<AddressItemProps> = ({ address, onSelect, isSelected }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.container, isSelected && styles.selected]}>
      <Text style={styles.addressText}>{address}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  selected: {
    borderColor: 'blue',
    backgroundColor: '#e6f7ff',
  },
  addressText: {
    fontSize: 16,
  },
});

export default AddressItem;
