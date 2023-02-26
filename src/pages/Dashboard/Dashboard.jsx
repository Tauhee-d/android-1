import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import img from "../../../assets/img/dashImg.jpeg";
import { TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={img} />
      </View>
      <View style={styles.container}>
        <View style={styles.container1}>
            <View style={styles.button1}>
          <Ionicons style={styles.textcolor} name="person-add" size={25} />
          <TouchableOpacity
            
           
            onPress={() => navigation.navigate('Choose PatientType')}
            borderless="true"
            rippleColor="blue"
          >
            <Text style={styles.label}>Add Patient</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("Add Patient");
            }}
            borderless="true"
            rippleColor="blue"
          >
  <Ionicons
                  style={styles.textcolor}
                  name="person"
                  size={25}
                />
            <Text style={styles.label}>OutPatient</Text>
          </TouchableOpacity>     
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("Add Patient");
            }}
            borderless="true"
            rippleColor="blue"
          >
             <Ionicons
                  style={styles.textcolor}
                  name="person-remove"
                  size={25}
                />
            <Text style={styles.label}>InPatient</Text>
          </TouchableOpacity>
             </View>
        <View style={styles.container3}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("Add Patient");
            }}
            borderless="true"
            rippleColor="blue"
          >
  <Ionicons
                  style={styles.textcolor}
                  name="receipt-outline"
                  size={25}
                />
            <Text style={styles.label}>Medical Records</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("Add Patient");
            }}
            borderless="true"
            rippleColor="blue"
          >
              <MaterialIcons
                    style={styles.textcolor}
                    name="payments"
                    size={25}
                  />
            <Text style={styles.label}>Users</Text>
          </TouchableOpacity>
                  </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'white',

  },
  imgContainer: {
    height: "40%",
    // width: "100%",
  },
  container: {
    height: "60%",
    width: "100%",
  
  },
  img: {
    height: "90%",
    width: "100%",
  },
  container1:{
    paddingLeft:'10%',
    paddingRight:'10%',
    width:'100%',
    alignItems:'center'
  },
  container2:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft:'10%',
    paddingRight:'10%',
    padding:10,
    width: "100%",
  },
  container3:{
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:10,
    paddingLeft:'10%',
    paddingRight:'10%',
    width: "100%",

    
  },
  button1:{
    flexDirection:'row',
    justifyContent:'space-around',
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
  button:{
    width: "40%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor:'#F4F9F9',
   
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 8
  }
});
