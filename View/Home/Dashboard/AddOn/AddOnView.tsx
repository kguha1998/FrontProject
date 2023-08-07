import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const AddOnView = ({navigation, route}: AddOnViewPorps) => {
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
               Add Items
          </Text>
      </LinearGradient>
      <View >
          <TouchableOpacity onPress={() =>navigation.navigate('ChooseItem')}>
            <View style={{marginLeft:80,marginRight:80,padding:10,elevation:25,backgroundColor:'#Ff8600',borderRadius:10, borderWidth: 1, borderColor: 'white'}}>
             <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',color:'white'}}>BACK TO THE ITEMS</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddOnView;
interface AddOnViewPorps{
    navigation?: any;
    route?: any;
}