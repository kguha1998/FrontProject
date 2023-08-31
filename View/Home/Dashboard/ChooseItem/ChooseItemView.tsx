import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';


const ChooseItemView = ({navigation, route}: ChooseItemViewProps) => {

  const ItemTypeList=[
        {
        TypeNo:1,
        Type:'Exotic',
        commodity: [
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
        ]
        },
        {
        TypeNo:2,
        Type:'Leafy',
        commodity: [
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
        ]
        },
        {
        TypeNo:3,
        Type:'Regular',
        commodity: [
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
        ]
        },
        {
        TypeNo:4,
        Type:'Seasonal' ,
        commodity: [
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
        ]
        }  
      ]

  return (
    <View style={{flex:1}}>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 30,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 50,
        }}>
        <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>
          Choose Items
        </Text>
        <View style={{marginRight:320, marginTop:22}}>
        <TouchableOpacity onPress={() => navigation.navigate('ChooseBox')}>
          <Icon name="arrow-back-circle" size={50} color={'white'} />
        </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView style={{height: '50%'}}>
      <View style={{flex: 1}}>
      
      {
        ItemTypeList.map((item, index)=>(
          <ComodityType item={item} key={index}/>
        ))
      }
      {/* {
        order.map((m:any)=>(
          <ComodityType item={m.commodity_type_id} key={m}/>
        ))
      } */}
       </View>
      </ScrollView>
      
     
    </View>
    
    );
  };
      
export default ChooseItemView;
interface ChooseItemViewProps {
  navigation?: any;
  route?: any;
  order?: any;
}
interface ChooseItem {
  navigation?: any;
  id?: any;
  Itemname?: any;
  ImageLink?: any;
  item?: any;
}

interface ChooseItemType {
  navigation?: any;
  TypeNo?: any;
  Type?: any;
  itemType?: any;
}


 //Items Component
const Veg = ({navigation,item}: ChooseItem) => {
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
      {/* <View style={{width: 150, height: 150}}>
        <Image
          // source={require(item.ImageLink)}
          source={{uri: item.ImageLink}}
          style={{width: 150, height: 150, resizeMode: 'contain'}}
        />
      </View> */}

      <View style={{flexDirection: 'column', alignItems: 'baseline'}}>
        <View style={{marginTop: 40, alignItems: 'baseline'}}>
          <Text style={{fontSize: 16, textAlign: 'right', color: '#Ff8600'}}>
            {item.commodity_name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginRight: 30,
            alignItems: 'center',
          }}>
          <Button title="Add To Cart"  color="#f57c00" onPress={()=> navigation.navigate('AddOn')}/>
          
        </View>
      </View>

    </View>
  );
};


const ComodityType = (props: any)=>{
  // const ComodityType = ({item}: any)=>{
  const [step, SetStep]= useState<boolean>(false)
  return(
    <View>
    <TouchableOpacity onPress={()=> SetStep(!step)} style={{
      flexDirection:'row',
      marginTop:20,
      height:60,
      width:380,
      borderRadius:12,
      backgroundColor:'#FFA500',
      justifyContent:'center',
      alignItems:'center',
      elevation:10
    }}>

     <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>{props.item.Type}</Text>
     {/* <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>{props.commodity_type_name}</Text> */}
    <Icon name="chevron-down-circle-outline" style={{color:'white'}} size={(30)} /> 

    </TouchableOpacity>
    <ScrollView>

    
     <Collapsible collapsed={!step}>

      {props.ItemTypeList.commodity.map((item: any) => (
        <Veg  item={item} key={item.id} />
      ))}
    </Collapsible>
    </ScrollView>
    </View>
  )
}