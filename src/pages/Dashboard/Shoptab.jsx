import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
const Drawer = createDrawerNavigator()

const Shoptab = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default Shoptab

const styles = StyleSheet.create({})