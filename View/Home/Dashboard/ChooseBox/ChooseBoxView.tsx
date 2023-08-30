import { View, Text, Image, ScrollView, Button, Dimensions, Animated } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';


const ChooseBoxView = ({navigation, route,product}: ChooseBoxViewPorps) => {
  return (
     <View style={{paddingBottom:1200}}>
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
               Choose Box
          </Text>
      </LinearGradient>
      <ScrollView style={{paddingBottom:600}}>

      {product.map((item:any,index:any)=>
      <ProductBox navigation={navigation} item={item} key={index} />

      )}   
        </ScrollView>
        </View>
        
  )
}

export default ChooseBoxView;
interface ChooseBoxViewPorps{
    navigation?: any;
    route?: any;
    product?:any;
}

const ProductBox =({navigation,item}: any)=>{ 
  console.log("item:.............", item);
  console.log("product_name:", item.product_name);
  return(
    
    <View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:50,}}>
              <TouchableOpacity onPress={() =>navigation.navigate('ChooseItem')}>
                <View style={{flexDirection:'row'}}>
                  <View >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                 </View>
                  <View style={{flexDirection: 'column',marginTop:30}}>
                  <View style={{}}>
                  <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,color:'#Ff8600',marginTop:30}}>{item.product_name}</Text>
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize:15 , textAlign:'right',paddingRight:12,color:'#Ff8600'}}>Choose Item upto: {item.max_allowed_items}</Text>
                  </View>
                </View>
                </View>
                <View style={{paddingBottom:2,elevation:25}}>
                <Button title="Choose Item" color="orange"/>
                {/* <TouchableOpacity onPress={() => navigation.navigate('ChooseItem')}>
                  <Animatable.Text transition="fontSize" style={{fontSize: 30}}>Choose Item</Animatable.Text> 
                  </TouchableOpacity> */}                
                
                </View>
              </TouchableOpacity> 
            </View>
           
  )
}

interface ProductBoxporps{
  navigation?: any;
  Item?: any;
  item?:any;
  product?:any;
}

  