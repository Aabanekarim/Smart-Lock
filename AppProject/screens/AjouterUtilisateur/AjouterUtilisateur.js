import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState,useEffect} from 'react'
import CustomInputAS from '../../components/CustomInputAS/CustomInputAS'
import CustomButtonAS from '../../components/CustomButtonAS/CustomButtonAS'
import CustomReturn from '../../components/CustomReturn/CustomReturn'
import { useNavigation } from '@react-navigation/native'
const AjouterUtilisateur = () => {
    const [code, setCode] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [admin, setAdmin] = useState('');
    const [msg, setMsg] = useState('');
    const [isStyleEnabled, setIsStyleEnabled] = useState(false)
    
    const navigation = useNavigation();

    const onAjouterPressed = async () => {
      if(code!="" && lastname!="" && firstname!=""){
      try {
        const response = await fetch('http://172.20.10.3:3000/ajouter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstname:firstname,lastname:lastname,code :code})
        })
        .then(async response => {
          
        const data = await response.json();
        })
        
      } catch (error) {
        console.error(error);
      }
      setMsg("ajout succes")
      setIsStyleEnabled(true)
      setTimeout(() => {
        setIsStyleEnabled(false)
        setMsg('')
      },5000);
    }
  }
    const onReturnPressed = () => {
      navigation.navigate('Root');
    }
    
    function setmess ()  {
      setMsg('')
    }
    useEffect(()=>{
      setMsg('')
      setIsStyleEnabled(false)
  },[])

  return (
    
    <View style={styles.root}>
    <CustomInputAS 
      placeholder="Enter the code" 
      value={code} 
      setValue={setCode}/>
      <CustomInputAS
      placeholder="Enter the First name" 
      value={firstname} 
      setValue={setFirstName}/>
      <CustomInputAS 
      placeholder="Enter the Last name" 
      value={lastname} 
      setValue={setLastName}/>
      <CustomButtonAS text="Ajouter" onPress={onAjouterPressed} />
      <View style={isStyleEnabled ? styles.selectionGroup : null}>
            <Text style={styles.selectionAjouter}>
              {msg}
            </Text>
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
    selectionGroup: {
        
      width: 316,
      height: 66,
      left: 5,
        top:'5%',
        backgroundColor: '#4eb6f180',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
  },
    selectionAjouter: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      fontWeight : 'bold',
        
  },




    
});



export default AjouterUtilisateur