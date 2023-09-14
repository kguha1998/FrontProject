/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import MainRoute from './View';
import { NavigationContainer } from '@react-navigation/native';
import{Provider as StoreProvider} from 'react-redux';
import ConfigureStore from './Stores/configureStore';


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
