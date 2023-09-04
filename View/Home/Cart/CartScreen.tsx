import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import { StoreState } from '../../../Models/reduxModel';
import { userDetail } from '../../../Models/User';
import { cart_page } from '../../../Models/Cart';
import { CartItemAction } from '../../../Stores/Actions/cartAction';
import { connect } from 'react-redux';


const CartScreen = ({user,cart,props,setStep,CartItemAction }: CartItemProps) => {
  useEffect(()=>{
    CartItemAction(user?.customer_id);
    console.log(user?.customer_id)
  },[])
  const [cartItems, setCartItems] = useState([
    {id: '1', name: 'KSW Mini Box', price: 250, quantity: 1},
    {id: '2', name: 'KSW Small Box', price: 350, quantity: 2},
    {id: '3', name: 'KSW Large Box', price: 500, quantity: 3},
  ]);

  

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };
  const incrementQuantity = (itemId: string) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decrementQuantity = (itemId: string) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity - 1} : item,
      ),
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== itemId),
    );
  };

  const [Collapsed, setCollapsed] = React.useState(true);
  const toggleExpand = () => {
    setCollapsed(!Collapsed);
  };


  
    const [exoticCollapsed, setExoticCollapsed] = useState(true);
    const [leafyCollapsed, setLeafyCollapsed] = useState(true);
    const [regularCollapsed, setRegularCollapsed] = useState(true);

    const toggleExotic = () => {
      setExoticCollapsed(!exoticCollapsed);
    };

    const toggleLeafy = () => {
      setLeafyCollapsed(!leafyCollapsed);
    };

    const toggleRegular = () => {
      setRegularCollapsed(!regularCollapsed);
    };

  const [isOpen, setIsopen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  const renderCartItem = ({item}:any)=> (
    <View
      style={{
        height: 140,
        width: '95%',
        backgroundColor: 'white',
        margin: 10,
        flexDirection: 'column',
      }}>
      <View>
        <Text
          style={{marginTop: 20, marginLeft: 15, color: 'black', fontSize: 20}}>
          {item.name}
        </Text>
      </View>
      {/* <View>
        <TouchableOpacity onPress={toggleExpand} >
          <Text
            style={{
              fontSize: 15,
              marginLeft: 160,
              color: 'red',
              marginTop: -23,
            }}>
                        Customize
          </Text>
              </TouchableOpacity>
       

      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <BlurView
            style={styles.blurContainer}
            blurType="light"
            blurAmount={10}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                
          <View>
      <View>
        <TouchableOpacity onPress={toggleExotic}>
          <Text style={styles.modalText}> Exotic</Text>
        </TouchableOpacity>
        <Collapsible collapsed={exoticCollapsed}>
          <View style={{}}>
            <Text>Capsicum Green</Text>
            <Text>MUSROOM PC (Oyester Only)</Text>
            <Text>DRUMSTICK</Text>
          </View>
        </Collapsible>
      </View>

      <View>
        <TouchableOpacity onPress={toggleLeafy}>
          <Text style={styles.modalText}> Leafy</Text>
        </TouchableOpacity>
        <Collapsible collapsed={leafyCollapsed}>
          <View style={{}}>
            <Text>RED AMARANTHUS </Text>
          </View>
        </Collapsible>
      </View>

      <View>
        <TouchableOpacity onPress={toggleRegular}>
          <Text style={styles.modalText}> Regular</Text>
        </TouchableOpacity>
        <Collapsible collapsed={regularCollapsed}>
          <View style={{}}>
            <Text>Carrot</Text>
            <Text>Cucumber</Text>
            <Text>Red Tomato</Text>
          </View>
        </Collapsible>
      </View>
    </View> */}

                {/* <View><TouchableOpacity onPress={toggleExpand}>
                        <Text style ={ styles.modalText}> Exotic</Text>
                        </TouchableOpacity>
                        <Collapsible collapsed={Collapsed}>
                          <View style={{}}>
                                        <Text>Capsicum Green</Text>
                            <Text>MUSROOM PC (Oyester Only)</Text>
                            <Text>DRUMSTICK</Text>
                          </View></Collapsible></View>


                          <View><TouchableOpacity onPress={toggleExpand}>
                        <Text style ={ styles.modalText}> Leafy</Text>
                        </TouchableOpacity>
                        <Collapsible collapsed={Collapsed}>
                          <View style={{}}>
                                        <Text>RED AMARANTHUS </Text>
                                          </View></Collapsible></View>


                                          <View><TouchableOpacity onPress={toggleExpand}>
                        <Text style ={ styles.modalText}> Regular</Text>
                        </TouchableOpacity>
                        <Collapsible collapsed={Collapsed}>
                          <View style={{}}>
                                        <Text>Carrot</Text>
                            <Text>Cucumber</Text>
                            <Text>Red Tomato</Text>
                          </View></Collapsible></View> */}
                {/* 
            <Text  style={styles.modalText}>Capsicum Green</Text>
            <Text  style={styles.modalText}>Musroom PC</Text>
            <Text  style={styles.modalText}>Red Amaranthus</Text>
            <Text  style={styles.modalText}>Pumpkin Red</Text>
            <Text  style={styles.modalText}>Kundru</Text> */}
                {/* <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide </Text>
                </Pressable>
              </View>
            </View>
          </BlurView>
        </Modal>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 25,
              color: 'red',
              marginTop: -23,
            }}>
            Show Items{' '}
          </Text>
        </Pressable>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 0,
          backgroundColor: 'white',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            height: 20,
            width: 20,
            borderRadius: 9,
            margin: 20,
            marginTop: 20,
          }}
          onPress={() => decrementQuantity(item.id)}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            -
          </Text>
        </TouchableOpacity>

        <Text style={{marginTop: 20, color: 'black', marginRight: 10}}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            height: 20,
            width: 20,
            borderRadius: 9,
            margin: 10,
            marginTop: 20,
          }}
          onPress={() => incrementQuantity(item.id)}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: '600'}}>
            +
          </Text>
        </TouchableOpacity>

        {/* <View>
                  <Text style={{marginTop: -20, color: 'black',marginLeft:10,fontWeight: '500',fontSize:15}}>
          {item.price}
          </Text>
        </View> */}

        <View>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              marginLeft: 115,
              fontWeight: '500',
              fontSize: 15,
            }}>
            ₹{item.price}
          </Text>
        </View>

        <View style={{ marginLeft: 10,marginTop:9}}>
          <TouchableOpacity
            onPress={() => removeFromCart(item.id)}
            style={{
              borderRadius: 100,
              width: 80,
              alignSelf: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal:10,
              marginLeft: 5,
            }}>
          
            <Icon name="trash-outline" style={{color:'black'}} size={(30)} />
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={{flexDirection:'column'}}><Text>Show Items</Text></View>
    </View>
  );
  return (
    <View>
      <LinearGradient
        colors={['#FFB900', '#FFE435', '#FFA000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
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
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            height: 80,
            width: '95%',
            backgroundColor: 'white',
            margin: 10,
            flexDirection: 'column',
          }}>
          <View>
            <Text
              style={{
                marginTop: 5,
                color: 'black',
                fontSize: 23,
                fontWeight: 'bold',
              }}>
              Bill Details
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 7, color: 'black', fontSize: 17}}>
              Total Price:
            </Text>
            <Text
              style={{
                marginTop: 7,
                color: 'black',
                marginLeft: 230,
                fontSize: 17,
                fontWeight: '500',
              }}>
              ₹{calculateTotalPrice()}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => setStep(1)}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 25,
            marginBottom: 30,
            backgroundColor: '#fa8b0c',
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 53,
  },
});


const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    // user: state.user.user_detail,
    cart: state.cart.cart_item
  };
};
const mapDispatchToProps = {
  CartItemAction 
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)

interface CartItemProps{
  props?:any;
  setStep:(step :1) =>void;
  user?: userDetail;
  cart?: cart_page[];
  CartItemAction?:any;
}