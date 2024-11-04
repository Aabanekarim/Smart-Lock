import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButtonAS = ({onPress, text}) => {
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
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
        top: 25,
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
    },

});
export default CustomButtonAS