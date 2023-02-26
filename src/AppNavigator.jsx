import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,Fontisto,MaterialIcons} from '@expo/vector-icons';

import SignIn from './pages/SignIn&Up/SignIn'
import SplashScreen from './pages/SignIn&Up/SplashScreen'
import Dashboard from './pages/Dashboard/Dashboard'
import Shoptab from './pages/Dashboard/Shoptab'
import PatientType from './pages/AddPatient/PatientType'
import PatientDetail1 from './pages/AddPatient/PatientDetail1'
import PatientDetail2 from './pages/AddPatient/PatientDetail2'
import PatientDetail3 from './pages/AddPatient/PatientDetail3'
import PatientDetail from './pages/AddPatient/PatientDetail'
import Sucess from './pages/Sucess'
import PatientDetail4 from './pages/AddPatient/PatientDetail4'
import PatientProfile from './pages/AddPatient/PatientTabs/PatientProfile'
import Symptoms from './pages/AddPatient/PatientTabs/Symptoms';
import Treatment from './pages/AddPatient/PatientTabs/Treatment';
import UploadFiles from './pages/AddPatient/PatientTabs/UploadFiles';
import UpdatePatient from './pages/AddPatient/PatientTabs/UpdatePatient';

const Tab = createBottomTabNavigator();
function PatientTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Patient Profile'} component={PatientProfile}
          options={{ headerShown: true,headerBackTitleVisible:true, tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" color={color} size={size} />
          ),}}/>
      <Tab.Screen name={'Symptoms'} component={Symptoms}
          options={{ headerShown: true,headerBackTitleVisible:true, tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sick" color={color} size={size} />
          ),}}/>
      <Tab.Screen name={'Treatment'} component={Treatment}
          options={{ headerShown: true,headerBackTitleVisible:true, tabBarIcon: ({ color, size }) => (
            <Fontisto name="injection-syringe" color={color} size={size} />
          ),}}/>
      <Tab.Screen name={'Upload Files'} component={UploadFiles}
          options={{ headerShown: true,headerBackTitleVisible:true, tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-upload" color={color} size={size} />
          ),}}/>
    </Tab.Navigator>
  );
}
const AppNavigator = () => {
    const [showScreen, setShowScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setShowScreen(false);
        }, 2000);
      }, []);
    const Stack = createStackNavigator()

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
        {showScreen ? (
          <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
          />
          ) :         <Stack.Screen name='login' component={SignIn}/>
        }


<Stack.Screen
          name="Shoptab"
          component={Shoptab}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        /> */}
   
<Stack.Screen name={'Dashboard'} component={Dashboard}
          options={{ headerShown: true,headerLeft: () => <></> }}/>
<Stack.Screen name={'Choose PatientType'} component={PatientType}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Patient'} component={PatientDetail}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Details'} component={PatientDetail1}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Guardian Details'} component={PatientDetail2}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Address'} component={PatientDetail3}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Select Doctor'} component={PatientDetail4}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Sucess'} component={Sucess}
          options={{ headerShown: false,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Patient Tabs'} component={PatientTabs}
          options={{ headerShown: false,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Update Patient'} component={UpdatePatient}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>

{/* {/* <Stack.Screen name={'Enter Details'} component={PatientDetail1} */}
{/* <Stack.Screen name={'Enter Details'} component={PatientDetail1}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Guardian Details'} component={PatientDetail2}
          options={{ headerShown: true,headerBackTitleVisible:false}}/>
<Stack.Screen name={'Enter Address'} component={PatientDetail3}
          options={{ headerShown: true,headerBackTitleVisible:false}}/> */}


         
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator