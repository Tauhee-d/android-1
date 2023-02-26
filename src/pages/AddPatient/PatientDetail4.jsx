import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { TextInput,TouchableRipple } from 'react-native-paper'

import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';




const PatientDetail4 = ({navigation}) => {

    const handleLogin = () => {
        navigation.navigate('Sucess')
      }

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
    <View>
      <Text>ParentDetail4</Text>

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
      

     
     
     
<View style={{marginLeft:'60%'}}>
     <TouchableRipple
style={styles.button}
    onPress={handleLogin}
    borderless='true'
    rippleColor="blue"
  >
<Text style={styles.label}>Login</Text>
  </TouchableRipple>
      </View>
      
    </View>
  )
}

export default  PatientDetail4

const styles = StyleSheet.create({
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
})