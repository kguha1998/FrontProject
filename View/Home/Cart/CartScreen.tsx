import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

const CartScreen = (props:any) => {
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
      CART
    </Text>
  </LinearGradient>
  
    
    <View style={{flexDirection:'row'}}>
                  <View >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 50, height: 50, resizeMode: 'contain', }}
                 />
                 </View>
                 
      <Text style={{color: 'black', fontSize: 25,marginBottom:10,marginTop:10}}>Small Box</Text>
      
    </View>
    <View style={{flexDirection:'row'}}>
                  <View >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 50, height: 50, resizeMode: 'contain', }}
                 />
                 </View>
                 
      <Text style={{color: 'black', fontSize: 25,marginBottom:10,marginTop:10}}>Medium Box</Text>
      
    </View>
    <View style={{flexDirection:'row'}}>
                  <View >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 50, height: 50, resizeMode: 'contain', }}
                 />
                 </View>
                 
      <Text style={{color: 'black', fontSize: 25,marginBottom:10,marginTop:10}}>Large Box</Text>
      
    </View>
    <View>
      <TouchableOpacity onPress={() => props.setStep(1)}
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
}


export default CartScreen