import { View, Text, Image, ScrollView, Button, Dimensions, Animated } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';


const ChooseBoxView = ({navigation, route}: ChooseBoxViewPorps) => {
   const Box:any=[
    {
      product_id:17,
      BoxName:"KWS JUMBO Box",
      max_allowed_items:"18"
    },
    {
      product_id:36,
      BoxName:"Large Box",
      max_allowed_items:"18"
    }
   ] 
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
               Choose Box
          </Text>
      </LinearGradient>
      <ScrollView style={{}}>

      {Box.map((item:any)=>
      <ProductBox navigation={navigation} item={Box} key={item.product_id}/>
      )}   
        </ScrollView>
        </View>
        
  )
}

export default ChooseBoxView;
interface ChooseBoxViewPorps{
    navigation?: any;
    route?: any;
  
}

const ProductBox=({navigation,item}:ProductBoxporps)=>{
  console.log(item);
  return(
    <View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
    backgroundColor: 'white',marginBottom:50}}>
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
        <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,color:'#Ff8600',marginTop:30}}>{item.BoxName}</Text>
        </View>
        <View style={{}}>
        <Text style={{fontSize:15 , textAlign:'right',paddingRight:12,color:'#Ff8600'}}>{item.max_allowed_items}</Text>
        </View>
      </View>
      </View>
      <View style={{paddingBottom:2,elevation:25}}>
      <Button title="Choose Item" color="orange"/>
      {/* Animation */}
      {/* <Animated.View>
        
      </Animated.View>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseItem')}>
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
}

  {/* firstBox */}
            {/*<View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:50}}>
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
                  <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,color:'#Ff8600',marginTop:30}}>Large Box</Text>
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize:15 , textAlign:'right',paddingRight:12,color:'#Ff8600'}}>Size Quantity : 500 gm</Text>
                  </View>
                </View>
                </View>
                <View style={{paddingBottom:2,elevation:25}}>
                <Button title="Choose Item" color="orange"/>
                 Animation 
                 <Animated.View>
                  
                </Animated.View>
                <TouchableOpacity onPress={() => navigation.navigate('ChooseItem')}>
                  <Animatable.Text transition="fontSize" style={{fontSize: 30}}>Choose Item</Animatable.Text>
                </TouchableOpacity> 
                
                
                </View>
              </TouchableOpacity>
            </View>

           
            <View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:50}}>
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
                  <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,color:'#Ff8600',marginTop:30}}>Medium Box</Text>
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize:15 , textAlign:'right',paddingRight:12,color:'#Ff8600'}}>Size Quantity : 350 gm</Text>
                  </View>
                </View>
                </View>
                <View style={{paddingBottom:2,elevation:25}}>
                <Button title="Choose Item" color="orange"/>
                </View>
              </TouchableOpacity>
            </View>

            
            <View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:50}}>
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
                  <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,color:'#Ff8600',marginTop:30}}>Small Box</Text>
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize:15 , textAlign:'right',paddingRight:12,color:'#Ff8600'}}>Size Quantity : 250 gm</Text>
                  </View>
                </View>
                </View>
                <View style={{paddingBottom:2,elevation:25}}>
                <Button title="Choose Item" color="orange"/>
                </View>
              </TouchableOpacity>
            </View>*/}