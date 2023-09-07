import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const OrderListView = ({navigation, route}: OrderListViewProps) => {
  const [food, foodHistory] = useState<any>([]);
  useEffect(() => {
    try {
      axios
        .get('https://testenvironemet.free.beeceptor.com/food')
        .then((response: {data: any}) => {
          foodHistory(response.data);
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

      <View>
        <ScrollView>
          {/* {
          food.map((m:any)=> (
            <HistoryBody key={m.order_id} item={m}/>
          ))
        } */}
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('OrderDetail')}
        style={styles.button}>
        <Text>Go to Order Detail Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderListView;
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: 'white',
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
});
interface OrderListViewProps {
  navigation?: any;
  route?: any;
}
