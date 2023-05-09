import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import Favorite from './screen/Favorite';
import Profile from './screen/Profile';
import Basket from './screen/Basket';
import ProductDetail from './screen/ProductDetail';
import SvgProfile from './src/components/icons/Profile';
import SvgHome from './src/components/icons/Home';
import SvgHeart from './src/components/icons/Heart';
import SvgBuy from './src/components/icons/Buy';
import { Button } from 'react-native/Libraries/Components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Splash from './screen/Splash';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ focused }) => (
          <SvgHome style={{
            width: 30,
            height: 30,
            stroke: focused ? "blue" : "#200E32",
            fill: focused ? "blue" : "none",
          }} />
        )
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ focused }) => (
          <SvgProfile style={{
            width: 30,
            height: 30,
            stroke: focused ? "blue" : "#200E32",
            fill: focused ? "blue" : "none"
          }} />
        )
      }} />
      <Tab.Screen name='Favorite' component={Favorite} options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ focused }) => (
          <SvgHeart style={{
            width: 24,
            height: 24,
            stroke: focused ? "blue" : "#200E32",
            fill: focused ? "blue" : "none"
          }} />
        )
        
      }} />
      <Tab.Screen name='Basket' component={Basket} options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ focused }) => (
          <SvgBuy style={{
            width: 30,
            height: 30,
            stroke: focused ? "blue" : "#200E32",
            fill: focused ? "blue" : "none"
          }} />
        )
      }} />
    </Tab.Navigator>
  )
}

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash'  options={{
          title:"",
          headerShown:false
        }} component={Splash}></Stack.Screen>
        <Stack.Screen name='HomeStack' options={{ headerShown: false }} component={HomeStack} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{
          title: "",
          headerShown:false
          
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  heartIcon: {
    marginRight: 20,
  }
})

export default App