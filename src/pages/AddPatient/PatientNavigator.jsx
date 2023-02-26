import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import PatientDetail1 from './PatientDetail1';
import PatientDetail2 from './PatientDetail2';
import PatientDetail3 from './PatientDetail3';
import PatientDetail4 from './PatientDetail4';
import Sucess from '../Sucess';

const Stack = createNativeStackNavigator();
const PatientNavigator = () => {

  return (
    <View>
<Stack.Navigator>
    
      <Stack.Screen name={'Enter Details'} component={PatientDetail1}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Guardian Details'} component={PatientDetail2}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Address'} component={PatientDetail3}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Select Doctor '} component={PatientDetail4}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
           <Stack.Screen name={'Sucess'} component={Sucess} />
    </Stack.Navigator>    </View>
  )
}

export default PatientNavigator

const styles = StyleSheet.create({})