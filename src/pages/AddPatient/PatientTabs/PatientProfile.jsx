import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import {AntDesign, FontAwesome,Entypo } from "react-native-vector-icons";
import { TextInput,TouchableRipple } from 'react-native-paper'


const PatientProfile = ({navigation}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProfile = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ScrollView style={{margin:10,}}>
    <View style={styles.container1}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:90,alignItems:'center'}}>
      <FontAwesome name='male' size='30' />
      <Text>name</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Update Patient')}>

      <Entypo name='edit' size='30' />
    </TouchableOpacity>

    </View>
    <View style={{marginTop:10}}>
    <View style={{backgroundColor:'green',width:130,marginLeft:40,borderRadius:10,
    
}}>
    <Text style={styles.btn}>OutPatient</Text>
    </View>
    <Text style={styles.text}>Patient ID:</Text>
    <Text style={styles.text}>UHID:</Text>
    <Text style={styles.text}>Dr.dhjb</Text>
    


    </View>
    </View>
    <View style={styles.container2}>
      <View style={{borderWidth:1,borderColor:'#A7BBC7',margin:15}}></View>
      {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}> */}
     
      <View style={{marginRight:20}}>
    
      <TouchableOpacity onPress={toggleProfile} style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{marginLeft:25}}>Full Profile</Text>
        <AntDesign name={isExpanded ? 'up' : 'down'} size={25} />
      </TouchableOpacity>
      {isExpanded && (
        <View>
          <Text style={{marginLeft:25}}>Dob:</Text>
          <Text style={{marginLeft:25}}>Weight:</Text>
          <Text style={{marginLeft:25}}>Gender:</Text>
          <Text style={{marginLeft:25}}>Phone:</Text>
          <Text style={{marginLeft:25}}>Email:</Text>
          <View style={{borderWidth:1,borderColor:'#A7BBC7',margin:15}}></View>
          <Text style={{marginLeft:25}}>Address:</Text>
          <Text style={{marginLeft:25}}>City:</Text>
          <Text style={{marginLeft:25}}>State:</Text>
          <Text style={{marginLeft:25}}>Country:</Text>
          <Text style={{marginLeft:25}}>Pin Code:</Text>
          <View style={{borderWidth:1,borderColor:'#A7BBC7',margin:15}}></View>
          <Text style={{marginLeft:25}}>Parent/Guardian:</Text>
          <Text style={{marginLeft:25}}>Parent/Guardian Email:</Text>
          <Text style={{marginLeft:25}}>Parent/Guardian Phone:</Text>



        </View>
      )}
    
      </View>
      {/* </View> */}
      <View style={{borderWidth:1,borderColor:'#A7BBC7',margin:15}}></View>
    </View>
    <View style={styles.container3}>
    <TouchableRipple
style={styles.button}
    // onPress={handleLogin}
    borderless='true'
    rippleColor="blue"
  >
<Text style={styles.label}>Make InPatient</Text>
  </TouchableRipple>
  <TouchableRipple
style={styles.button}
    // onPress={handleLogin}
    borderless='true'
    rippleColor="blue"
  >
<Text style={styles.label}>Discharge Patient</Text>
  </TouchableRipple>
    </View>
    </ScrollView>
  )
}

export default PatientProfile

const styles = StyleSheet.create({
  container1:{
    
    height: 240,
    justifyContent: "center",
    padding:10,
    paddingTop:10,
    borderRadius: 20,
    backgroundColor:'#F4F9F9',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 8
  },
  text:{
    marginLeft:40,
    marginTop:15
  },
  btn:{
    textAlign:'center',
    color:'white',
    padding:10,
  },
  container3:{
    padding:10
  },
  button: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor:'blue',
    marginTop:20
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    color:'white',
    fontWeight:'bold',
    padding:5,
    
  },
})