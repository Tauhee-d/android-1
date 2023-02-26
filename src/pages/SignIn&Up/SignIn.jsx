

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { TextInput,TouchableRipple } from 'react-native-paper'


const SignIn = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    navigation.navigate('Dashboard')
  }


  return (
    <View style={styles.maincontainer}>
      <View style={styles.imageContainer}>
        <Image         style={styles.image}
source={require('../../../assets/img/yantram.jpeg')} />

      </View >
      <TextInput style={styles.inputStyle}
      label="Email"
      value={email}
      left={<TextInput.Icon icon="email" />}
      keyboardType={"email-address"}
      mode='outlined'
      onChangeText={text => setEmail(text)}
    />
    <Text style={{marginBottom:20,fontSize:12,marginLeft:10}}>Required</Text>
      <TextInput 
style={{borderRadius:10}}

      label="Password"
      value={password}

      secureTextEntry={!showPassword}
      left={<TextInput.Icon icon="key" />}
      right={ <TextInput.Icon icon={ showPassword ? "eye-off" : 'eye'} 
      onPress={PasswordVisibility}
      />}
     

      mode='outlined'
      onChangeText={text => setPassword(text)}
    />
        <Text style={{marginBottom:20,fontSize:12,marginLeft:10}}>Required</Text>

 <TouchableRipple
style={styles.button}
    onPress={handleLogin}
    borderless='true'
    rippleColor="blue"
  >
<Text style={styles.label}>Login</Text>
  </TouchableRipple>
          </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  maincontainer:{
    padding:40,
    marginTop:50,
  },
  imageContainer:{
    display:'flex',
    alignItems:'center'

  },
  inputStyle: {
    // backgroundColor: '#fff',
    // marginBottom: 10,
    // padding: 10,
    borderRadius: 55,
    // borderWidth: 1,
    // borderColor: '#ccc',
  },
  button: {
    borderRadius: 4,
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
    fontWeight:'bold'
    
  },
  image: {
    display:'flex',
    width: 120,
    height: 120,
    alignItems:'center',
    justifyContent:'center'
  },
})