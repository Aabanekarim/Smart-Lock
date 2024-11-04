import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButtonOuvrir from './CustomButtonOpen/CustomButtonOuvrir'
//import { useNavigation } from '@react-navigation/native'
const Getcode = () => {

//const navigation = useNavigation();
const [msg,setMsg] = useState('')
const [data,setData] = useState([])
const [isStyleEnabled, setIsStyleEnabled] = useState(false)
const onPressed = async () => {
    fetch('http://172.20.10.3:3000/read')
        .then(resp => {
            console.log(resp.headers)
            return resp.json();
        })
        .then(article => {
            setData(article)
            console.log(data.msg)
            
        })
        .catch(error => console.log(error))
        
        setIsStyleEnabled(true)
        setTimeout(() => {
          setIsStyleEnabled(false)
          setMsg('')
        },10000);
  };
  
  return (
    
    <View style={styles.root}>

      <CustomButtonOuvrir text="Getcode" onPress={onPressed} />
      <View style={isStyleEnabled ? styles.msg : null}>
          <Text style={styles.msgmini}>{data.msg}</Text>
        </View>
    </View>
    
  )
}

const styles= StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 926,
        position: 'relative',
        width: 428,
        backgroundColor: '#FFFFFF',
    },
    msg: {
      position: 'absolute',
      width: 320,
      height: 66,
      left: 52,
      top: '75%',
      backgroundColor: '#4eb6f180',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    msgmini: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
    },
 
});

export default Getcode