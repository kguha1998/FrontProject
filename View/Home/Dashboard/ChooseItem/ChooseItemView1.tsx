import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { BaseUrl } from '../../../../environment';

const ChooseItemView1 = ({
  navigation,
  productDetails,
  AddToCartAction,
  AddToCart
  
}: ChooseItemView1porps) => {
  
  const [expandedCommodityTypeIndex, setExpandedCommodityTypeIndex] =
    useState(null);
    const [cart, setCart] = useState<any>([]); 

    // const [buttonColor, setButtonColor] = useState('white'); // State for button color
    const [buttonColors, setButtonColors] = useState<Record<string, string>>({}); // State for button colors

    const handleAddToCart = ( Add: any) => {
      const newCart = [...cart]; 
      newCart.push(Add); 
      setCart(newCart);
      // Set the button color for the specific commodity item
    setButtonColors(prevColors => ({
      ...prevColors,
      [Add]: 'green',
    })); 
    };

    const handleRemoveItemFromCart = (itemToRemove: any) => {
      setCart(cart.filter((item:any) => item !== itemToRemove));
      setButtonColors(prevColors => ({
        ...prevColors,
        [itemToRemove]: 'white',
      }));
    };

    const handleToggleCartItem = (commodityId: any) => {
      if (cart.includes(commodityId)) {
        console.log(`Removing item ${commodityId} from the cart`);
        handleRemoveItemFromCart(commodityId);
      } else {
        console.log(`Adding item ${commodityId} to the cart`);
        handleAddToCart(commodityId);
      }
    };

    const GoToCart= () =>{
      AddToCart(cart)
    }
   
  return (
    <View style={{}}>
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
          paddingTop: 20,
        }}>
        <View style={{flexDirection: 'row', marginTop: 40, paddingRight: 70}}>
          <View style={{marginRight: 50}}>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseBox')}>
              <Icon name="arrow-back-circle" size={50} color={'white'} />
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <Text
              style={{
                color: 'white',
                fontSize: 27,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Choose Items
            </Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView >
         <View style={{paddingBottom:170}}>  
            <View style={styles.container}>
             {productDetails && (
              <View>
                 {productDetails.comodity_item.map(
                     (commodityType: any, index: any): any => (
                     <View key={index} >
                      <TouchableOpacity
                        style={styles.commodityTypeButton}
                         onPress={() => {
                      if (expandedCommodityTypeIndex === index) {
                        setExpandedCommodityTypeIndex(null);
                      } else {
                        setExpandedCommodityTypeIndex(index);
                      }
                    }}>
                      
                     <View> 
                      <Text style={styles.commodityTypeName}>
                      {commodityType.commodity_type_name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Collapsible collapsed={expandedCommodityTypeIndex !== index}>
                    
                   <View >
                    <Text style={styles.maxItem}>Max Allowed Items : {commodityType.allowed_items}</Text>
                    <View style={{flexDirection:'column' }}>
                     
                    {commodityType.commodities.map(
                      (commodity: any, cIndex: any) => (
                        <View key={cIndex} style={styles.commoditiesStyle}>
                          <View style={{flexDirection:'row'}}>
                          <View>
                          <Image
                              //  source={{uri: 'https://cdn3.iconfinder.com/data/icons/salad/512/vegetable-healthy-vitamins-food-512.png'}}
                              source={{uri: `http://192.168.1.13:3000/api/v1/image/${commodity.commodity_id}`}}
                              style={{width: 100, height: 100, resizeMode: 'contain', }}
                            />
                          </View>
                          <View style={{marginBottom:10,marginLeft:20,marginTop:20}}>
                          <Text style={styles.commodityDescription}>{commodity.commodity_name}</Text>
                          <Text style={{fontSize:13,color:'#Ff8f00'}}>Quantity: {commodity.quantity}{commodity.measurement_unit}</Text>
                          </View>
                          </View>
                          
                          <View style={{flexDirection:'row',}}>
                            <View style={{}}>
                          <TouchableOpacity
                            style={[styles.button,{ backgroundColor: buttonColors[commodity.commodity_id] || 'white' }]}
                            onPress={() => {
                              // handleAddToCart(commodity.commodity_id);
                              handleToggleCartItem (commodity.commodity_id);
                            }}>
                            <Text style={styles.buttonText}>
                          {/* Add */}
                              {cart.includes(commodity.commodity_id) ? 'Remove' : 'Add'}
                           </Text>
                          </TouchableOpacity>
                          </View>
                          {/* <View style={{marginLeft:170}}>
                          <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => {
                              handleRemoveItemFromCart (commodity.commodity_id);
                            }}>
                            <Text style={styles.buttonText}>
                              Remove
                              {cart.includes(commodity.commodity_id) ? 'Remove' : 'Add'}
                            </Text>
                          </TouchableOpacity>
                          </View> */}
                          </View>
                        </View>
                        
                      ),
                    )}
                    </View>
                    </View>
                  </Collapsible>
                  
                     </View>
              ),
            )}
                     
                            <TouchableOpacity
                            style={styles.Cartbutton}
                            onPress={() => {navigation.navigate('Cart')
                              GoToCart() 
                            ;
                            }}>
                            <Text style={styles.buttonText}>Add To Cart</Text>
                          </TouchableOpacity>
                         
              </View>
        )}
            </View>
         </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'orange',
    // elevation: 10,
    // backgroundColor: 'white',
    marginBottom: 50,
  },
  commodityTypeButton: {
    backgroundColor: 'orange',
    elevation: 10,
    borderRadius: 15,
    padding: 20,
    marginVertical:20,
    
  },
  commodityTypeName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    color:'white',
  },
  maxItem:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#Ff8f00', 
  },
  commoditiesStyle:{
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 15,
    backgroundColor: 'white',
  },
  commodityDescription:{
    fontSize: 15,
    color:'#Ff8f00', 
    fontWeight:'500'
  },
  button: {
    backgroundColor: 'white',
    // borderRadius: 10,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    elevation:5
  },
  buttonText: {
    color: '#Ff8f00',
    fontWeight: '400',
  },
  Cartbutton: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    elevation:5
  }
});

export default ChooseItemView1;
interface ChooseItemView1porps {
  navigation?: any;
  route?: any;
  productDetails?: any;
  CartScreen?:any;
  AddToCartAction?:any;
  AddToCart?:any,
  GoToCart?:any
  
}
function AddToCart() {
  throw new Error('Function not implemented.');
}

