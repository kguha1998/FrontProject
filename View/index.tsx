import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from './LoginSignup';
import Home from './Home';
import { connect } from 'react-redux';
import { StoreState } from '../Models/reduxModel';
import { userDetail } from '../Models/User';

const MainRoute = ({ user }: MainProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous authentication check
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time according to your needs
  }, []);

  const Stack = createStackNavigator();

  if (loading) {
    // Display the native ActivityIndicator while checking authentication
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
      ) : (
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
