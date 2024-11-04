import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const [emailaddress, setEmailaddress] = useState('');
    const [password, setPassword] = useState('');
    const [op,setOp] = useState('');

    const navigation = useNavigation();
    const onSignInPressed = async () => {
    try {
      const response = await fetch('http://172.20.10.3:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emaile:emailaddress, password:password })
      })
      .then(async response => {
        
      const data = await response.json();
      
      
      if (data.status === 'success') {
        // TODO: Navigate to the next screen
        if(data.admin==true){
          navigation.navigate('Root',{id:data.id,firstname:data.firstname,lastname:data.lastname})
        }
        else{
          navigation.navigate('Root2',{id:data.id,firstname:data.firstname,lastname:data.lastname})
        }
      } else {
        setOp('emaile ou mot de pass incorrect')
        navigation.navigate('Sign in')
      }
      })
      
    } catch (error) {
      console.error(error);
    }
  };
    
  return (
    
    <View style={styles.root}>
      <CustomInput placeholder="Email Address" value={emailaddress} setValue={setEmailaddress}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
      <CustomButton text="Sign In" onPress={onSignInPressed} />
      {op ? <Text style={styles.errorMessage}>{op}</Text> : null}
      <View style={styles.cercleWrapper}>
          <View style={styles.overlapGroup2}>
            <View style={styles.ellipse} />
            <View style={styles.ellipse3} />
            </View>
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
    errorMessage: {
      color: 'red',
      marginTop: 70,
    },
    cercleWrapper: {
        position: 'absolute',
        top: -100,
        left: -75,
        width: 300,
        height: 263,
      },
      overlapGroup2: {
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
      ellipse3: {
        position: 'absolute',
        top: 0,
        left: 100,
        width: 200,
        height : 200,
        borderRadius: 100,
        backgroundColor: '#4DB6F178',
    },
    
});

export default SignInScreen