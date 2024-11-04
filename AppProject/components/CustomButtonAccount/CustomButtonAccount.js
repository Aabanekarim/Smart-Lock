import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButtonAccount = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#4EB7F1',
        width:'80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        top:-70,
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
    },

});
export default CustomButtonAccount