import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableRipple } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from "react-native-vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const UpdatePatient = () => {
    const [inputs, setInputs] = useState({
        fName: "",
        lName: "",
        patientID: "",
        uniqueHealthId: "",
        pEmailAddress: "",
        pPhoneNumber: "",
        weight: "", pName: "",pEmail: "",pPhone: "", pAddress: "",city: "",state: "",country: "",pinCode: "",
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


      const [doctor, setDoctor] = useState(null);
    const [department, setDepartment] = useState(null);
  const [docOpen, setDocOpen] = useState(false);
  const [depOpen, setDepOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'aliya 1', value: 'option1' },
    { label: 'haifa 2', value: 'option2' },
    { label: 'haife 3', value: 'option3' },
  ]);
  const [dep, setDep] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);

    
  return (
    <ScrollView style={styles.mainContainer}>
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
    <View style={{borderWidth:1,borderColor:'#A7BBC7',marginTop:20,marginBottom:20}}></View>



   







<TextInput
          style={styles.inputStyle}
          label="Parent Address"
          value={inputs.pAddress}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pAddress", value)}
        />


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

<View style={{borderWidth:1,borderColor:'#A7BBC7',marginTop:20,marginBottom:20}}></View>





<TextInput
          style={styles.inputStyle}
          label="Parent/Guardian Name"
          value={inputs.pName}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pName", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Parent/Guardian Email Address"
          value={inputs.pEmail}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pEmail", value)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Parent/Guardian Phone No"
          value={inputs.pPhone}
          mode="outlined"
          onChangeText={(value) => handleInputChange("pPhone", value)}
        />

      <View style={{borderWidth:1,borderColor:'#A7BBC7',marginTop:20,marginBottom:20}}></View>

      <View>

<DropDownPicker
  open={docOpen}
  value={doctor}
  items={items}
  setOpen={setDocOpen}
  setValue={setDoctor}
  setItems={setItems}
  placeholder="Doctor"
  style={{ marginTop: 10}}
/>
</View>

<View>

<DropDownPicker
  open={depOpen}
  value={department}
  items={dep}
  setOpen={setDepOpen}
  setValue={setDepartment}
  setItems={setDep}
  placeholder="Department"
  // style={{ marginTop: 80 }}
  style={{ marginTop: 70 }}
/>
</View>



<TouchableRipple
style={styles.Sbutton}
    // onPress={handleLogin}
    borderless='true'
    rippleColor="blue"
  >
<Text style={styles.label}>Submit</Text>
  </TouchableRipple>
    
  </ScrollView>
  )
}

export default UpdatePatient

const styles = StyleSheet.create({
    mainContainer: {
      padding: 10,
      backgroundColor:'white'
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
      marginLeft:3
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
      color:'white',
      fontWeight: "bold",
    },
    Sbutton:{
        borderWidth: 1,
        margin:10,
        marginBottom:150,
        marginTop:80,
        padding:10,
        backgroundColor:'blue',
        borderRadius:20

    }
  });