import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import  {NavigationContainer}  from '@react-navigation/native';
import  {createStackNavigator}  from '@react-navigation/stack';
import  {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';



const AuthStack = createStackNavigator();


function AuthStackNavigator() {
  return (

      <AuthStack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        <AuthStack.Screen name={'Login'} component={LoginScreen} />
        <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
      </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;


