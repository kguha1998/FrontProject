import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ChooseItemView = ({navigation, route}: ChooseItemViewProps) => {
  const Items: any = [
    {
      id: 1,
      ItemName: 'Green capsicum',
      qty: 0,
      ImageLink:
        'https://www.oifood.in/files/products/9f1114e47918b5a7a304cdbb60591a4b.jpg',
    },
    {
      id: 2,
      ItemName: 'Bellpepper',
      qty: 0,
      ImageLink:
        'https://t4.ftcdn.net/jpg/02/87/25/37/360_F_287253716_I1seSRet5pt8YGBRRcTbPPV1WesM00n9.jpg',
    },
    {
      id: 3,
      ItemName: 'Mushroom',
      qty: 0,
      ImageLink:
        'https://media.istockphoto.com/id/1276597176/photo/button-mushrooms.jpg?s=612x612&w=0&k=20&c=ilDpArGu1tDBzSAZR8zxr5VXjet7tb7U7Erx-vsRY4E=',
    },
    {
      id: 4,
      ItemName: 'Tomato',
      qty: 0,
      ImageLink:
        'https://img.freepik.com/premium-photo/red-tomatoes-with-cut-isolated-white_80510-576.jpg',
    },
    {
      id: 5,
      ItemName: 'Carrot',
      qty: 0,
      ImageLink: 'https://a-i-c.eu/wp-content/uploads/2019/12/p9.jpg',
    },
  ];
  return (
    <View>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: -50,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>
          Choose Items
        </Text>
      </LinearGradient>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ChooseBox')}>
            <Icon name="arrow-back-outline" size={30} color={'white'} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() =>navigation.navigate('ChooseBox')}>
            <View style={{marginTop:10,marginBottom:30,marginLeft:80,marginRight:80,padding:10,elevation:25,backgroundColor:'#Ff8600',borderRadius:10, borderWidth: 1, borderColor: 'white'}}>
             <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',color:'white',}}>BACK</Text>
            </View>
          </TouchableOpacity> */}
        </View>

        {Items.map((item: any) => (
          <Veg navigation={navigation} item={item} key={item.id} />
        ))}
        <View>
          <Text style={{fontSize: 20}}> here</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseItemView;
interface ChooseItemViewProps {
  navigation?: any;
  route?: any;
}
interface ChooseItem {
  navigation?: any;
  id?: any;
  Itemname?: any;
  ImageLink?: any;
  item?: any;
}

const Veg = ({navigation, item}: ChooseItem) => {
  return (
    /* Green Capsicum */
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'orange',
        elevation: 10,
        backgroundColor: 'white',
        marginBottom: 30,
      }}>
      <View style={{width: 150, height: 150}}>
        <Image
          // source={require(item.ImageLink)}
          source={{uri: item.ImageLink}}
          style={{width: 150, height: 150, resizeMode: 'contain'}}
        />
      </View>

      <View style={{flexDirection: 'column', alignItems:'baseline'}}>
        <View style={{marginTop: 40,alignItems:'baseline' }}>
          <Text style={{fontSize: 16, textAlign: 'right', color: '#Ff8600'}}>
            {item.ItemName}
          </Text>
        </View>

        <View style={{flexDirection: 'row',marginTop: 10,marginRight:30,alignItems:'center'}}>
          {/* <Button title="Add To Cart"  color="#f57c00" onPress={()=> navigation.navigate('AddOn')}/> */}
          <TouchableOpacity
            style={{
              backgroundColor: '#f57c00',
              height: 27,
              paddingHorizontal: 10,
              borderRadius:5
            }}>
            <Text style={{color: 'white'}}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#f57c00',
              height: 27,
              paddingHorizontal: 10,
              borderRadius:5,
              marginLeft:10
            }}>
            <Text style={{color: 'white'}}>-</Text>
          </TouchableOpacity>
          <Text style={{marginLeft:10,fontSize:16,fontWeight:'600'}}>{'0'}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#f57c00',
              height: 27,
              paddingHorizontal: 8,
              borderRadius:5,
              marginLeft:10
            }}>
            <Text style={{color: 'white'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
