import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomButtonStarted from '../../components/CustomButtonStarted/CustomButtonStarted';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const onGetStartedPressed = () => {

        navigation.navigate('Sign in');
    }
  return (
    
    <View style={styles.root}>
      <View style={styles.cercleWrapper}>
          <View style={styles.overlapGroup}>
            <View style={styles.ellipse} />
            <View style={styles.ellipse2} />
            </View>
        </View>
        <CustomButtonStarted text="Get Started" onPress={onGetStartedPressed} style={styles.Started} />
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
    logo: {
        position: 'absolute',
        width: 243,
        height: 239,
        left: 95,
        top: 343,

    },
    cercleWrapper: {
        position: 'absolute',
        top: -100,
        left: -75,
        width: 300,
        height: 263,
      },
      overlapGroup: {
        position: 'relative',
        height: 263,
      },
      ellipse: {
        position: 'absolute',
        top: 63,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#4DB6F178',
      },
      ellipse2: {
        position: 'absolute',
        top: 0,
        left: 100,
        width: 200,
        height : 200,
        borderRadius: 100,
        backgroundColor: '#4DB6F178',
      },
    
});
export default HomeScreen