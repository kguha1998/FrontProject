import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginView from './LoginView';
import {connect} from 'react-redux';
import {StoreState} from '../../../Models/reduxModel';
import {LoginAction} from '../../../Stores/Actions/userAction';
import {userDetail} from '../../../Models/User';

const Login = ({navigation, route, LoginAction, user}: LoginPorps) => {
  const Login = (data: any) => {
    LoginAction(data);
  };
  return <LoginView navigation={navigation} Login={Login} />;
};

// export default Login;
// interface LoginPorps{
//   navigation?: any;
//   route?: any;
// }
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
