import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AddressPage from './AddressPage';
import { NavigationContainer } from '@react-navigation/native';
import AddressListView from '../../Profile/AddressList/AddressListView';
import AddressList from './AddressList';


const Address = (props: any) => {
  return (
  <ScrollView>
    <LinearGradient
    colors={['#FFB900', '#FFE435', '#FFA000',]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      // borderBottomLeftRadius: 15,
      // borderBottomRightRadius: 15,
      height: Dimensions.get('window').height * 0.1,
      width: '100%',
      elevation: 25,
      alignItems: 'center',
      paddingTop: 25,
    }}>
    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold',marginBottom:5}}>
      Delivery Address
    </Text>
  </LinearGradient>
    <View>
      <AddressList />
    {/* <AddressPage /> */}
    {/* <AddressListView /> */}
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddressSelection" component={AddressPage} />
      </Stack.Navigator>
    </NavigationContainer> */}
  
    </View>
    <View>
      <TouchableOpacity onPress={() => props.setStep(2)} 
      style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 30,
            backgroundColor:'#fa8b0c'
          }}>
        <Text style={{color: 'white', fontSize: 19}}>Next</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
};

export default Address