import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
