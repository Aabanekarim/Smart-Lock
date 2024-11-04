import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const CustomInputAccount = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry} />
    </KeyboardAvoidingView>
  )
}

const styles= StyleSheet.create({
container:{
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(217, 217, 217, 0.35)',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingHorizontal: 20,
    marginVertical: 5,
    top: -100,
},
input:{
    flexGrow: 1,
},
});

export default CustomInputAccount