import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButtonOuvrir = ({onPress, text}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 240,
      height: 240,
      borderRadius: 120,
      backgroundColor: '#4EB7F1',
    },
    text: {
      color: '#fff',
      fontSize: 32,
      fontWeight: 'bold',
    },
  });
export default CustomButtonOuvrir