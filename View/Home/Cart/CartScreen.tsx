import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const CartScreen = (props: any) => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
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
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
          CART
        </Text>
      </LinearGradient>
      <View>
        <View
          style={{
            height: 80,
            width: '95%',
            backgroundColor: 'white',
            margin: 10,flexDirection:'row'
          }}>
          <View >
            <Image
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
              style={{height: 80, width: 80}}
            />
          </View>
          <View>
            <Text style={{marginTop:30,color:'black',fontSize:20}}>Small Box</Text>
          </View>
         <View style={{marginLeft:40}}>
         <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:35}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>-</Text>
         </TouchableOpacity>
          </View> 
          <View><Text style={{marginTop:35,color:'black'}}>1</Text></View>
         <View style={{marginRight:20}}>
         <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:35}}>
         <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>+</Text>
         </TouchableOpacity>

          </View> 
        </View>
        <View
          style={{
            height: 80,
            width: '95%',
            backgroundColor: 'white',
            margin: 10,flexDirection:'row'
          }}>
          <View >
            <Image
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
              style={{height: 80, width: 80}}
            />
          </View>
          <View>
            <Text style={{marginTop:30,color:'black',fontSize:20}}>Medium Box</Text>
          </View>
         <View style={{marginLeft:17}}>
         <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:35}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>-</Text>
         </TouchableOpacity>
          </View> 
          <View><Text style={{marginTop:35,color:'black'}}>2</Text></View>
         <View style={{marginRight:20}}>
         <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:35}}>
         <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>+</Text>
         </TouchableOpacity>

          </View> 
        </View>
        <View
          style={{
            height: 80,
            width: '95%',
            backgroundColor: 'white',
            margin: 10,flexDirection:'row'
          }}>
          <View >
            <Image
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
              style={{height: 80, width: 80}}
            />
          </View>
          <View>
            <Text style={{marginTop:30,color:'black',fontSize:20}}>Large Box</Text>
          </View>
         <View style={{marginLeft:40}}>
         <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:35}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>-</Text>
         </TouchableOpacity>
          </View> 
          <View><Text style={{marginTop:35,color:'black'}}>3</Text></View>
         <View style={{marginRight:20}}>
         <TouchableOpacity style={{backgroundColor:'green',height:20,width:20,borderRadius:9,margin:35}}>
         <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>+</Text>
         </TouchableOpacity>

          </View> 
        </View>
      </View>

      {/* <View style={{flexDirection:'row',width:'100%',elevation:10,marginTop:10,borderRadius:10,height:100,justifyContent:'flex-start',alignItems:'flex-start'}}>
      
                  <View style={{paddingVertical:25,paddingHorizontal:5}} >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 50, height: 50, resizeMode: 'contain', }}/>
                 </View>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity style={{backgroundColor:'green',padding:10,borderRadius:10}}></TouchableOpacity>

                 
                 </View>
                 
      <Text style={{color: 'black', fontSize: 25,marginTop:35}}>Small Box</Text>
      </View> */}

      {/* <View style={{flexDirection:'row',width:'100%',elevation:10,borderRadius:10,height:100,justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <View style={{paddingVertical:25,paddingHorizontal:5}} >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 50, height: 50, resizeMode: 'contain', }}
                 />
                 </View>
                 
      <Text style={{color: 'black', fontSize: 25,marginTop:35}}>Medium Box</Text>
      </View>

    <View style={{flexDirection:'row',width:'100%',elevation:10,borderRadius:10,height:100,marginBottom:10,justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <View style={{paddingVertical:25,paddingHorizontal:5}} >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 50, height: 50, resizeMode: 'contain', }}
                 />
                 </View>
                 
      <Text style={{color: 'black', fontSize: 25,marginTop:35}}>Large Box</Text>
      
      </View> */}

      <View>
        <TouchableOpacity
          onPress={() => props.setStep(1)}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 30,
            backgroundColor: '#fa8b0c',
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartScreen;
