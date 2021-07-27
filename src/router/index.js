import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, TambahKontak, DetailKontak, EditKontak, Splash} from '../pages';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahKontak"
        component={TambahKontak}
        options={{title: 'Tambah Tempat Wisata'}}
      />
      <Stack.Screen
        name="DetailKontak"
        component={DetailKontak}
        options={{title: 'Detail Data'}}
      />
      <Stack.Screen
        name="EditKontak"
        component={EditKontak}
        options={{title: 'Edit Data'}}
      />
    </Stack.Navigator>
  );
};

export default Route;
