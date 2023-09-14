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
  
  // const [expandedCommodityTypeIndex, setExpandedCommodityTypeIndex] =
  //   useState(null);
    const [cart, setCart] = useState<any>([]); 

    // const [buttonColor, setButtonColor] = useState('white'); // State for button color
    const [buttonColors, setButtonColors] = useState<Record<string, string>>({}); // State for button colors
    // const [selectedItemCount, setSelectedItemCount] = useState(0);

    const handleAddToCart = ( Add: any) => {
      const newCart = [...cart]; 
      newCart.push(Add); 
      setCart(newCart);
      // Set the button color for the specific commodity item
    setButtonColors(prevColors => ({
      ...prevColors,
      [Add]: 'white',
    })); 
    };

    const handleRemoveItemFromCart = (itemToRemove: any) => {
      setCart(cart.filter((item:any) => item !== itemToRemove));
      setButtonColors(prevColors => ({
        ...prevColors,
        [itemToRemove]: 'white',
      }));
    };
    const [selectedItemCounts, setSelectedItemCounts] = useState<{ [key: string]: number }>({});
    
    const handleToggleCartItem = (commodityId: any,commodityType: any) => {
      const categoryItemId = commodityType.commodity_type_id;
      if (!selectedItemCounts[categoryItemId]) {
        selectedItemCounts[categoryItemId] = 0;
      }
      if (cart.includes(commodityId)) {
        handleRemoveItemFromCart(commodityId);
        // setSelectedItemCount(selectedItemCount - 1);
        setSelectedItemCounts({
          ...selectedItemCounts,
          [categoryItemId]: selectedItemCounts[categoryItemId] - 1,
        });
      } else {
        // console.log(`Adding item ${commodityId} to the cart`);
        // handleAddToCart(commodityId);
        if (selectedItemCounts[categoryItemId] < commodityType.allowed_items) {
          handleAddToCart(commodityId);
          // setSelectedItemCount(selectedItemCount + 1);
          setSelectedItemCounts({
            ...selectedItemCounts,
            [categoryItemId]: selectedItemCounts[categoryItemId] + 1,
          });
        } else {
        }
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
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <View style={{flexDirection: 'row', marginTop: 35, paddingRight: 70}}>
          <View style={{marginRight: 50}}>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseBox')}>
              <Icon name="arrow-back-circle" size={50} color={'white'} />
            </TouchableOpacity>
          </View>
            <View>         
          <View style={{marginBottom:8}}>
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
          <View style={{alignItems:'center',backgroundColor:'white',borderWidth:1,borderColor:'#Ff8f00',height:30,width:140}}>
          <Text style={{
                alignItems:'baseline',
                fontSize: 15,
                color:'#Ff8f00',
                fontWeight: '500',
                textAlign: 'center',
                marginTop:5
              }}>
           {productDetails && productDetails.product_name}
            </Text>
          </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{paddingBottom:400}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
         <View style={{paddingBottom:20,marginTop:-30}}>  
            <View style={styles.container}>
             {productDetails && (
              <View>
                 {productDetails.comodity_item.map(
                     (commodityType: any, index: any): any => (
                     <View key={index} >
                      {/* <TouchableOpacity
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
                  </TouchableOpacity> */}
                  <View style={styles.commodityTypeButton}> 
                      <Text style={styles.commodityTypeName}>
                      {commodityType.commodity_type_name}
                      </Text>
                    </View>
                  {/* <Collapsible collapsed={expandedCommodityTypeIndex !== index}> */}
                    
                   <View >
                    <Text style={styles.maxItem}>Max Allowed Items : {commodityType.allowed_items}
                    {selectedItemCounts[commodityType.commodity_type_id]  >= commodityType.allowed_items
                    ? " (Max items reached)"
                    : ` (Selected items: ${selectedItemCounts[commodityType.commodity_type_id]})`}
                    </Text>
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
                              onError={() => (
                                <Image
                                  source={{ uri: `https://cdn3.iconfinder.com/data/icons/salad/512/vegetable-healthy-vitamins-food-512.png` }}
                                  style={{ width: 100, height: 100, resizeMode: 'contain' }}
                                />
                              )}
                            />
                          </View>
                          <View style={{marginBottom:5,marginLeft:10,marginTop:10}}>
                          <Text style={styles.commodityDescription}>{commodity.commodity_name}</Text>
                          <Text style={{fontSize:13,color:'#Ff8f00'}}>Quantity: {commodity.quantity} {commodity.measurement_unit}</Text>
                          </View>
                          </View>
                          
                            <View style={{alignItems:'flex-end'}}>
                          <TouchableOpacity
                            style={[styles.button,{ backgroundColor: buttonColors[commodity.commodity_id] || 'white' }]}
                            onPress={() => {
                              // handleAddToCart(commodity.commodity_id);
                              handleToggleCartItem (commodity.commodity_id,commodityType);
                            }}>
                            <Text style={styles.buttonText}>
                          {/* Add */}
                              {cart.includes(commodity.commodity_id) ? <Icon name="trash-sharp" size={30} color={'orange'} /> : <Icon name="add-circle-sharp" size={35} color={'orange'}/>}
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
                        
                      ),
                    )}
                    </View>
                    </View>
                  {/* </Collapsible> */}
                  
                     </View>
              ),
            )}
{/*                      
                            <TouchableOpacity
                            style={styles.Cartbutton}
                            onPress={() => {navigation.navigate('Cart')
                              GoToCart() 
                            ;
                            }}>
                            <Text style={styles.buttonText}>Go To Cart</Text>
                          </TouchableOpacity> */}
                         
              </View>
        )}
            </View>
         </View>
      </ScrollView>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity
                            style={styles.Cartbutton}
                            onPress={() => {navigation.navigate('Cart')
                              GoToCart() 
                            ;
                            }}>
                            <Text style={styles.buttonText}>Go To Cart<Icon name="cart-sharp" size={30} color={'#Ff8f00'} /></Text>
                          </TouchableOpacity>
    </View>
      </View>
      <View>
      {/* <TouchableOpacity
                            style={styles.Cartbutton}
                            onPress={() => {navigation.navigate('Cart')
                              GoToCart() 
                            ;
                            }}>
                            <Text style={styles.buttonText}>Go To Cart</Text>
                          </TouchableOpacity> */}
    </View>
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
    borderRadius: 5,
    padding: 10,
    marginVertical:20,
    marginHorizontal:10
    
  },
  commodityTypeName: {
    fontSize: 20,
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
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  commodityDescription:{
    fontSize: 15,
    color:'#Ff8f00', 
    fontWeight:'500'
  },
  button: {
    // backgroundColor: 'white',
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'orange',
    // borderWidth: 1.5,
    // elevation:5,
    // width:70
  },
  buttonText: {
    color: '#Ff8f00',
    fontWeight: '700',
    fontSize:18,
    alignSelf:'center',
    
  
  },
  Cartbutton: {
    backgroundColor: 'white',
    borderRadius: 5,
     width: 250, // Adjust the width and height as needed
  // height: 50,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1.5,
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

