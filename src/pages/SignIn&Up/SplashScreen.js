import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import logo from "../../../assets/img/yantram.jpeg";
import DocImg from "../../../assets/img/Doc.jpeg";

const SplashScreen = () => {

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text >Making User Friendly Products for</Text>
        <Text >Medical Professionals</Text>
      </View>
      <View style={styles.imgContainer}>
      <Image style={{width:'100%',height:'90%'}} source={DocImg} />
      <Text style={{marginLeft:'80%',marginTop:'5%'}}>Loading..</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
  },
  container: {
    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'30%'
  },
  logo: {
    height: 120,
    width: 120,
    marginTop:50
  },
  imgContainer:{
    height:'70%'
  }
});
