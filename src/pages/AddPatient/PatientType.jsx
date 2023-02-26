import * as react from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const PateintType = ({ navigation }) => {
  return (
    <View style={Styles.maincontainer}>


      <View style={Styles.btncontainer}>
        <View style={Styles.subcontainer}>
          <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Enter Details')}>
            <Ionicons name="person-remove" size={25} />
            <Text style={Styles.btntext}>OutPateint</Text>
            <MaterialCommunityIcons name="greater-than" size={25} />
          </TouchableOpacity>
        </View>
        <View style={Styles.subcontainer}>
          <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Patient')}>
            <Ionicons style={Styles.icon} name="person" size={25} />
            <Text style={Styles.btntext}>InPateints</Text>
            <MaterialCommunityIcons name="greater-than" size={25} />

          </TouchableOpacity>
        </View>
      </View>



    </View>

  );
};

const Styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: "white",
    justifyContent: 'center'
  },

  btncontainer: {
    width: "100%",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    // justifyContent: 'space-around'

  },

  subcontainer: {
    width: "70%",
    height: 50,
    marginBottom:30,
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
  btn: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 12,
    flexDirection:'row',

  },
  btntext: {
    fontSize: 18,
    paddingLeft:35,
    paddingRight:35

  },



})

export default PateintType;
