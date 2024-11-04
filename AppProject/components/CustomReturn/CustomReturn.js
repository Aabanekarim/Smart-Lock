import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
const CustomReturn = ({onPress, type="PRIMARY", fgColor}) => {
  return (
    <View>
      <AntDesign name="arrowleft" onPress={onPress} style={[styles.container,styles[`container_${type}`], fgColor ? {color: fgColor} : {} ]} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        fontSize: 24,
        color: "#FFFFFF",
        right: '40%',
        position: 'absolute',

    },
    container_PRIMARY:{
      top: -625,
    },
    container_TERTIARY:{
      top: -550,
    },
    container_TT:{
      top: -480,
    },

});
export default CustomReturn