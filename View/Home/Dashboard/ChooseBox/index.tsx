import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const ChooseBox = () => {

    return(
      <ScrollView> 
        <View>
         <TouchableOpacity style={{backgroundColor: '#e1e8e3',height:55,width:'95%', margin:10,borderRadius:10,}}>
         <Text style={{fontSize:15, fontWeight:'500',margin:15,marginLeft:20}}>Small Box</Text>
         </TouchableOpacity>
          <View style={{height:300,width:200}}>
           <Image
             source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
             style={{width: 200, height: 200, resizeMode: 'contain'}}
           />
          </View>
         </View>
         <View>
         <TouchableOpacity style={{backgroundColor: '#e1e8e3',height:55,width:'95%', margin:10,borderRadius:10,}}>
         <Text style={{fontSize:15, fontWeight:'500',margin:15,marginLeft:20}}>Medium Box</Text>
         </TouchableOpacity>
          <View style={{height:300,width:200}}>
           <Image
             source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
             style={{width: 200, height: 200, resizeMode: 'contain'}}
           />
          </View>
         </View>
         <View>
         <TouchableOpacity style={{backgroundColor: '#e1e8e3',height:55,width:'95%', margin:10,borderRadius:10,}}>
         <Text style={{fontSize:15, fontWeight:'500',margin:15,marginLeft:20}}>Large Box</Text>
         </TouchableOpacity>
          <View style={{height:300,width:200}}>
           <Image
             source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
             style={{width: 200, height: 200, resizeMode: 'contain'}}
           />
          </View>
         </View>
      </ScrollView>
    )

}
export default ChooseBox