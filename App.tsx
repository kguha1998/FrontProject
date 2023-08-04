/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainRoute from './View';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
 

  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>

    
  );
}



export default App;
