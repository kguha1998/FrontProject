import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const OrderListView = ({navigation, route}: OrderListViewProps) => {
  const [veg, setVeg] = useState<any>([]);
  useEffect(() => {
    try {
      axios
        .get('https://testenvironemet.free.beeceptor.com/vegetable')
        .then((response: {data: any}) => {
          setVeg(response.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <View>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.LinearGradientStyle}>
        <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>
          Order List
        </Text>
      </LinearGradient>
      <ScrollView>
        <View style={{paddingBottom: 350}}>
          <View>
            {veg.map((m: any) => (
              <OrderDetailChild
                navigation={navigation}
                key={m.order_id}
                item={m}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const OrderDetailChild = ({navigation, route, item}: any) => {
  return (
<TouchableOpacity
        onPress={() => navigation.navigate('OrderDetail')}>
    <View
      style={styles.CardStyle}>
        <View style={{padding:10}}>
      <View>
        <Text style={styles.TextStyle}>Order ID : {item.Items_Details}</Text>
      </View>
      <View>
        <Text style={styles.TextStyle}>Product Name :{item.Tracking_No}</Text>
      </View>
      <View>
        <Text style={styles.TextStyle}>Qty : {item.Items_Quantity}</Text>
      </View>
      <View>
        <Text style={styles.TextStyle}>Price : {item.order_total}</Text>
      </View>
      </View>
      
          <View style={styles.button}>
        <Text>Go to Order Detail Page</Text>
        </View>
      
    </View>
    </TouchableOpacity>
  );
};

export default OrderListView;
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    elevation: 5,
  },
  LinearGradientStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  TextStyle: {
    fontSize: 18,
    
  },
  CardStyle: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'orange',
    elevation: 10,
    backgroundColor: 'white',
  },
});
interface OrderListViewProps {
  navigation?: any;
  route?: any;
}
