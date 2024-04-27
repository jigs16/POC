import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {BaseColor} from '../config';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: BaseColor.whiteColor}}>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigator;
