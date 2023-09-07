import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const OrderListView = ({navigation,route}:OrderListViewProps) => {
  return (
        <View>
        <LinearGradient
         colors={['#FFB900', '#FFE435', '#FFA000',]}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}
         style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
          }}>
          <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>
               Order List
          </Text>
      </LinearGradient>
      
      <TouchableOpacity onPress={()=>navigation.navigate('OrderDetail')}
      style={styles.button}>
        <Text>Go to Order Detail Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrderListView
const styles = StyleSheet.create({
  button: {
      marginTop:50,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'orange',
      borderWidth: 1,
      elevation:5
    }
});
interface OrderListViewProps{
    navigation?: any;
    route?:any;
  }