import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const ChooseItemView = ({navigation, route}:ChooseItemViewProps) => {
  return (
    <ScrollView>
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
               Choose Items
          </Text>
      </LinearGradient>
 
        <View style={{alignContent:'flex-end'}}>
          <TouchableOpacity onPress={() =>navigation.navigate('ChooseBox')}>
            <View style={{marginLeft:80,marginRight:80,padding:20,elevation:25,backgroundColor:'white',borderRadius:10, borderWidth: 1, borderColor: 'orange'}}>
             <Text style={{fontWeight:'bold',color:'#Ff8600',textAlign:'center'}}>BACK</Text>
            </View>
          </TouchableOpacity>
        </View>

    </ScrollView>
  )
}

export default ChooseItemView;
interface ChooseItemViewProps{ 
    navigation?: any;
    route?: any;

}