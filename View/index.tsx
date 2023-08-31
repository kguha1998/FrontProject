import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSignup from './LoginSignup';
import Home from './Home';
import {connect} from 'react-redux';
import {StoreState} from '../Models/reduxModel';
import {userDetail} from '../Models/User';

const MainRoute = ({user}: MainProps) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
      {!user ? (
=======
      {user ? (
>>>>>>> a6e3013c3f14a0ea7f01908d3bb6910670c8d3a3
   
       <Stack.Screen name="LoginSignup" component={LoginSignup} />
      ) : (
       
       //<Stack.Screen name="LoginSignup" component={LoginSignup} />

        <Stack.Screen name="Home" component={Home} />
        
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoute);
interface MainProps {
  user?: userDetail;
}
