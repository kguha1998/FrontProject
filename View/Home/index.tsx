import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Order from './Order';
import Cart from './Cart';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
<<<<<<< HEAD
    // <Tab.Navigator screenOptions={{tabBarStyle:{backgroundColor:'#fc8d1e'},headerShown:false,tabBarShowLabel:false,tabBarActiveTintColor: 'tomato',
    // tabBarInactiveTintColor: 'gray',}}  >
    //     <Tab.Screen options={{tabBarIcon:()=><Icon name="grid-outline" size={(30)} />}}  name="Dashboard" component={Dashboard} />
    //     <Tab.Screen options={{tabBarIcon:()=><Icon name="bag-handle-outline" size={(30)} />}}  name="Order" component={Order} />
    //     <Tab.Screen options={{tabBarIcon:()=><Icon name="cart-outline" size={(30)} />}}  name="Cart" component={Cart} />
    //     <Tab.Screen options={{tabBarIcon:()=><Icon name="person-circle-outline" size={(30)} />}}  name="Profile" component={Profile} />
=======
   
        
>>>>>>> 8c494772bb027ac287b47d998f58f2b982a267ce
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fa8b0c'},
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'red' : 'black'}
                name="grid-outline"
                size={30}
              />
            );
          },
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'red' : 'black'}
                name="bag-handle-outline"
                size={30}
              />
            );
          },
        }}
        name="Order"
        component={Order}
      />
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'red' : 'black'}
                name="cart-outline"
                size={30}
              />
            );
          },
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'red' : 'black'}
                name="person-circle-outline"
                size={30}
              />
            );
          },
        }}
        name="Profile"
        component={Profile}
      />
<<<<<<< HEAD
=======

>>>>>>> 8c494772bb027ac287b47d998f58f2b982a267ce
    </Tab.Navigator>
  );
};

export default Home;
