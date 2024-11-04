import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomButtonOuvrir from '../../components/CustomButtonOpen/CustomButtonOuvrir'
//import { useNavigation } from '@react-navigation/native'
const Ouvrir = ({ route}) => {
  const { firstname, lastname } = route.params;
//const navigation = useNavigation();

    const onOuvrirPressed = async () => {
      try {
        const response = await fetch('http://172.20.10.3:3000/send-parameter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "op" : "ouvrir", "firstname" : firstname,"lastname":lastname})
        })
        
       
        
      } catch (error) {
        console.error(error);
      }
    }
  return (
    
    <View style={styles.root}>
      <CustomButtonOuvrir text="ouvrir" onPress={onOuvrirPressed}/>
      
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
 
});

export default Ouvrir