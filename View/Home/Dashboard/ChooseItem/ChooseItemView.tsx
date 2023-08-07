import { View, Text, TouchableOpacity, Dimensions, Button, Image, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


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
      {/* Green Capsicum */}
      <View style={{ flexDirection:'row', marginTop:-30,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:70}}>
                <View>
                <Image
                    source={{uri: 'https://www.oifood.in/files/products/9f1114e47918b5a7a304cdbb60591a4b.jpg'}}
                    style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                </View>
                
                <View style={{flexDirection:'column'}}>
                 <View style={{marginTop:40}}>
                  <Text style={{fontSize:20 , textAlign:'right',color:'#Ff8600',paddingLeft:20}}>Green Capsicum</Text>
                 </View>

                 <View style={{marginLeft:100,marginTop:30}}>
                  <Button title="Add Item"  color="#f57c00" onPress={() => navigation.navigate('AddOn')}/>
                 </View>
                </View> 
      </View>
      
      {/* coloured capsicum */}
      <View style={{ flexDirection:'row', marginTop:-30,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:70}}>
                <View>
                <Image
                    source={{uri: 'https://t4.ftcdn.net/jpg/02/87/25/37/360_F_287253716_I1seSRet5pt8YGBRRcTbPPV1WesM00n9.jpg'}}
                    style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                </View>

                <View style={{flexDirection:'column'}}>
                 <View style={{marginTop:40}}>
                  <Text style={{fontSize:20 , textAlign:'right',color:'#Ff8600',paddingLeft:20}}>Bell Pepper</Text>
                </View>
                 <View style={{marginLeft:100,marginTop:30}}>
                  <Button title="Add Item"  color="#f57c00" />
                 </View>
                </View>
      </View>

      {/* Mushroom */}
      <View style={{ flexDirection:'row', marginTop:-30,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:70}}>
                <View>
                <Image
                    source={{uri: 'https://media.istockphoto.com/id/1276597176/photo/button-mushrooms.jpg?s=612x612&w=0&k=20&c=ilDpArGu1tDBzSAZR8zxr5VXjet7tb7U7Erx-vsRY4E='}}
                    style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                </View>
          
                <View style={{flexDirection:'column'}}>
                 <View style={{marginTop:40}}>
                  <Text style={{fontSize:20 , textAlign:'right',color:'#Ff8600',paddingLeft:20}}>Mushroom</Text>
                </View>
                 <View style={{marginLeft:100,marginTop:30}}>
                  <Button title="Add Item"  color="#f57c00" />
                 </View>
                </View>
      </View>
      
      {/* Tomatoes */}
      <View style={{ flexDirection:'row', marginTop:-30,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:70}}>
                <View>
                <Image
                  source={{uri: 'https://img.freepik.com/premium-photo/red-tomatoes-with-cut-isolated-white_80510-576.jpg'}}
                    style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                </View>
          
                <View style={{flexDirection:'column'}}>
                 <View style={{marginTop:40}}>
                  <Text style={{fontSize:20 , textAlign:'right',color:'#Ff8600',paddingLeft:20}}>Tomato</Text>
                </View>
                 <View style={{marginLeft:100,marginTop:30}}>
                  <Button title="Add Item"  color="#f57c00" />
                 </View>
                </View>
      </View>
      
      {/* Carrot */}
      <View style={{ flexDirection:'row', marginTop:-30,marginLeft:20,marginRight:20, borderRadius:10, borderWidth: 1, borderColor: 'orange',elevation: 10,
              backgroundColor: 'white',marginBottom:70}}>
                <View>
                <Image
                    source={{uri: 'https://a-i-c.eu/wp-content/uploads/2019/12/p9.jpg'}}
                    style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                </View>
          
                <View style={{flexDirection:'column'}}>
                 <View style={{marginTop:40}}>
                  <Text style={{fontSize:20 , textAlign:'right',color:'#Ff8600',paddingLeft:20}}>Carrot</Text>
                </View>
                 <View style={{marginLeft:100,marginTop:30}}>
                  <Button title="Add Item"  color="#f57c00" />
                 </View>
                </View>
      </View>
      
    
 
        <View >
          <TouchableOpacity onPress={() =>navigation.navigate('ChooseBox')}>
            <View style={{marginLeft:80,marginRight:80,padding:10,elevation:25,backgroundColor:'#Ff8600',borderRadius:10, borderWidth: 1, borderColor: 'white'}}>
             <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',color:'white'}}>BACK</Text>
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