import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState,useEffect} from 'react'
import CustomInputAS from '../../components/CustomInputAS/CustomInputAS'
import CustomButtonAS from '../../components/CustomButtonAS/CustomButtonAS'
import CustomReturn from '../../components/CustomReturn/CustomReturn'
import { useNavigation } from '@react-navigation/native'
const SupprimerUtilisateur = () => {
    const [code, setCode] = useState('');
    const [Msg, setMsg] = useState('');
    const [isStyleEnabled, setIsStyleEnabled] = useState(false)
    const navigation = useNavigation();

    const onSupprimerPressed = () => {
      if(code!=""){
      fetch(`http://172.20.10.3:3000/supprime/${code}/`,{
        method : 'DELETE',
        headers : {
          'Content-Type':'application/json'
        },
      })
      .then(data => {
        setMsg("Supprime succes")
        })
        .catch(error => 
          console.error(error)
        )
    const onReturnPressed = () => {
      navigation.navigate('Root');
    }
    setMsg("supprimer succes")
      setIsStyleEnabled(true)
      setTimeout(() => {
        setIsStyleEnabled(false)
        setMsg('')
      },5000);
  }
  }
  useEffect(()=>{
    setMsg('')
},[])
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <CustomInputAS 
      placeholder="Enter the code" 
      value={code} 
      setValue={setCode}/>

      <CustomButtonAS text="Supprimer" onPress={onSupprimerPressed} />
      <View style={isStyleEnabled ? styles.selectionGroup : null}>
            <Text style={styles.selectionSupprimer}>
              {Msg}
            </Text>
      </View>

    </View>
    </ScrollView>
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
    selectionSupprimer: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      fontWeight : 'bold',
        
  },




    
});



export default SupprimerUtilisateur