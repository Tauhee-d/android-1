import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableRipple } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from "react-native-vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const PatientDetail3 = ({ onNext,navigation }) => {
  const [inputs, setInputs] = useState({
    pAddress: "",city: "",state: "",country: "",pinCode: "",
   
  });
 
  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <TextInput
          style={styles.inputStyle}
          label="Parent Address"
          value={inputs.pAddress}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pAddress", value)}
        />

      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.container2Item1}
          label="City"
          value={inputs.city}
          mode="outlined"
          onChangeText={(value) => handleInputChange("city", value)}
        />
       <TextInput
          style={styles.container2Item1}
          label="State"
          value={inputs.state}
          mode="outlined"
          onChangeText={(value) => handleInputChange("state", value)}
        />
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.container2Item1}
          label="Country"
          value={inputs.country}
          mode="outlined"
          onChangeText={(value) => handleInputChange("country", value)}
        />
       <TextInput
          style={styles.container2Item1}
          label="Pin Code "
          value={inputs.pinCode}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pinCode", value)}
        />
      </View>
     
      <View style={{marginLeft:'60%'}}>
      <TouchableOpacity
        style={styles.button}
        // onPress={onNext}
        onPress={() => navigation.navigate('Select Doctor')}   
        borderless="true"
        rippleColor="blue"
      >
        <Text style={styles.label}>Next</Text>
        <MaterialCommunityIcons name="greater-than" size={25} />

      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default PatientDetail3;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  container2: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
    alignItems:'center',

  },
  iconContainer: {
    borderRadius: 50,
    padding: 10,
    marginLeft:50
  },
  container2Item1: {
    width: "49%",
  },
  container2Item2: {
    borderWidth: 1,
    height: 45,
    marginTop: 8,
    width: "49%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderColor: "#404258",
    borderRadius: 5,
  },
  button: {
    flexDirection:'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    marginTop: 20,
    width:150,
    alignItems:"center",
    justifyContent:'space-around'

  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
