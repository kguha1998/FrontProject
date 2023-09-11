/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainRoute from './View';
import { NavigationContainer } from '@react-navigation/native';
import{Provider as StoreProvider} from 'react-redux';
import ConfigureStore from './Stores/configureStore';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
 
  const store = ConfigureStore()
  return (
    <StoreProvider store={store}>
    <NavigationContainer>
      <MainRoute />
    
    </NavigationContainer>
    </StoreProvider>

    
  );
}



export default App;
