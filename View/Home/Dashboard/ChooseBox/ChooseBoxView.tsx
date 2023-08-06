import { View, Text, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ChooseBoxView = ({navigation, route}: ChooseBoxViewPorps) => {
    console.log("Nav",navigation)
  return (
    
    <ScrollView>
          
            {/* firstBox */}
            <View style={{paddingBottom:20}}>
              <TouchableOpacity onPress={() =>navigation.navigate('ChooseItem')}>
                <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 200, height: 200, resizeMode: 'contain', }}
                 />
                <Text style={{fontSize:20 , fontWeight:'bold', alignItems:'center'}}>Large Box</Text>
                <Button title="Choose Item"/>
              </TouchableOpacity>
            </View>

            {/* SecondBox */}
            <View style={{paddingBottom:20}}>
              <TouchableOpacity onPress={() =>navigation.navigate('ChooseItem')}>
                <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 200, height: 200, resizeMode: 'contain', }}
                 />
                <Text style={{fontSize:20 , fontWeight:'bold', alignItems:'center'}}>Medium Box</Text>
                <Button title="Choose Item"/>
              </TouchableOpacity>
            </View>

            {/* ThirdBox */}
            <View style={{paddingBottom:20}}>
              <TouchableOpacity onPress={() =>navigation.navigate('ChooseItem')}>
                <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 200, height: 200, resizeMode: 'contain', }}
                 />
                <Text style={{fontSize:20 , fontWeight:'bold', alignItems:'center'}}>Small Box</Text>
                <Button title="Choose Item"/>
              </TouchableOpacity>
            </View>
          
        </ScrollView>
        
  )
}

export default ChooseBoxView;
interface ChooseBoxViewPorps{
    navigation?: any;
    route?: any;
}

