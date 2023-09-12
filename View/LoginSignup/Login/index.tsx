import { View, Text } from 'react-native';
import React, { useEffect } from 'react'; // Import useEffect
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import { StoreState } from '../../../Models/reduxModel';
import { LoginAction } from '../../../Stores/Actions/userAction';
import { userDetail } from '../../../Models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation, route, LoginAction, user }: LoginPorps) => {
  useEffect(() => {
    // Function to load user details from AsyncStorage
    const loadUserDetailsFromStorage = async () => {
      try {
        const userJSON = await AsyncStorage.getItem('user_details');
        if (userJSON) {
          const userData = JSON.parse(userJSON);
          // Dispatch an action to set user details from AsyncStorage
          LoginAction(userData);
        }
      } catch (error) {
        console.error('Error loading user details from AsyncStorage:', error);
      }
    };

    // Call the function to load user details when the component mounts
    loadUserDetailsFromStorage();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleLogin = (data: any) => {
    LoginAction(data);

    AsyncStorage.setItem('user_details', JSON.stringify(data))
      .then(() => {
        console.log('Login details saved in AsyncStorage');
      })
      .catch((error) => {
        console.error('Error saving login details:', error);
      });
  };

  return <LoginView navigation={navigation} Login={handleLogin} />;
};

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
  };
};

const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

interface LoginPorps {
  navigation?: any;
  route?: any;
  user?: userDetail;
  LoginAction?: any;
}
