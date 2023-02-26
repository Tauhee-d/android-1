import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import PatientDetail2 from './PatientDetail2'
import PatientDetail3 from './PatientDetail3'
import PatientDetail1 from './PatientDetail1'
import PatientDetail4 from './PatientDetail4'

const PatientDetail = () => {
    const [page,setPage] = useState(0)
    const handleNext = () => {
        setPage(page + 1);
      };

  return (
    <View>
      {page === 0 && <PatientDetail1 onNext={handleNext} />}
      {page === 1 && <PatientDetail2 onNext={handleNext} />}
      {page === 2 && <PatientDetail3 onNext={handleNext}/>}
      {page === 3 && <PatientDetail4 />}
    </View>
  )
}

export default PatientDetail

const styles = StyleSheet.create({})