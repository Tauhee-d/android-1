import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableRipple } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from "react-native-vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const PatientDetail1 = ({ onNext,navigation }) => {
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    patientID: "",
    uniqueHealthId: "",
    pEmailAddress: "",
    pPhoneNumber: "",
    weight: "",
  });
  const [gender, setGender] = useState('');

  const [dob, setDob] = useState("Date of Birth");
  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const x = new Date(date);
    const y = x.toISOString().split("T");
    const z = y[0].split("-");
    const result = z[2] + "/" + z[1] + "/" + z[0];
    setDob(result);
    hideDatePicker();
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <TextInput
          style={styles.inputStyle}
          label="First Name"
          value={inputs.fName}
          mode="outlined"
          onChangeText={(value) => handleInputChange("fName", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Last Name"
          value={inputs.lName}
          mode="outlined"
          onChangeText={(value) => handleInputChange("lName", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Patient ID"
          value={inputs.patientID}
          mode="outlined"
          onChangeText={(value) => handleInputChange("patientID", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Unique Health Id"
          value={inputs.uniqueHealthId}
          mode="outlined"
          onChangeText={(value) => handleInputChange("uniqueHealthId", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Patient Email Address"
          value={inputs.pEmailAddress}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pEmailAddress", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Patient Phone Number"
          value={inputs.pPhoneNumber}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pPhoneNumber", value)}
        />
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.container2Item1}
          label="Weight"
          value={inputs.weight}
          mode="outlined"
          onChangeText={(value) => handleInputChange("weight", value)}
        />
        <TouchableOpacity
          style={styles.container2Item2}
          onPress={showDatePicker}
        >
          <Text style={{ color: "#404258" }}>{dob}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.container3}>
      <Text style={{color: "#404258"}}>Select Gender</Text>

        <TouchableOpacity
          onPress={() => setGender("male")}
          style={[
            styles.iconContainer,
            gender === "male" && { backgroundColor: "#007AFF" },
          ]}
        >

          <FontAwesome
            name="male"
            size={25}
            color={gender === "male" ? "white" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGender("female")}
          style={[
            styles.iconContainer,
            gender === "female" && { backgroundColor: "#007AFF" },
          ]}
        >
          <FontAwesome
            name="female"
            size={25}
            color={gender === "female" ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:'60%'}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Enter Guardian Details')}   
             // onPress={onNext}
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

export default PatientDetail1;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  container2: {
    flexDirection: "row",
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
