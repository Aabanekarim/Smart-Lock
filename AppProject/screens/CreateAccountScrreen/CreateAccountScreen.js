import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomButtonAccount from '../../components/CustomButtonAccount/CustomButtonAccount';
import CustomInputAccount from '../../components/CustomInputAccount/CustomInputAccount';
import CustomReturn from '../../components/CustomReturn/CustomReturn';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [admin, setAdmin] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [password, setPassword] = useState('');
    const [verifypassword, setVerifypassword] = useState('');
    const [isStyleEnabled, setIsStyleEnabled] = useState(false);
    const [msg,setMsg] = useState('');
    
    const navigation = useNavigation();

    const onCreateAccountPressed = async () => {
        if(firstname!="" && lastname!="" && emailaddress!="" && password!="" && password==verifypassword && admin!=""){
          if(admin=="Admin" || admin=="admin" || admin=="User" || admin=="user"){
          try {
            const response = await fetch('http://172.20.10.3:3000/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ firstname:firstname,lastname:lastname,emaile:emailaddress, password:password ,admin:admin})
            })
            .then(async response => {
              
            const data = await response.json();
            })
            
          } catch (error) {
            console.error(error);
          }
          setMsg('succes')
          setIsStyleEnabled(true)
          setTimeout(() => {
          setIsStyleEnabled(false)
          setMsg('')
        },5000);
        }
        else{
          console.log("saiser admine correct")
        }
        }
        else{
          console.log("error")
        }
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <CustomInputAccount 
      placeholder="First Name" 
      value={firstname} 
      setValue={setFirstname}/>
      <CustomInputAccount 
      placeholder="Last Name" 
      value={lastname} 
      setValue={setLastName}/>
      <CustomInputAccount 
      placeholder="Email Address" 
      value={emailaddress} 
      setValue={setEmailaddress}/>
      <CustomInputAccount 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry/>
      <CustomInputAccount 
      placeholder="Verify Password" 
      value={verifypassword} 
      setValue={setVerifypassword} 
      secureTextEntry/>
      <CustomInputAccount 
      placeholder="Admin / User" 
      value={admin} 
      setValue={setAdmin} 
      />
      <CustomButtonAccount text="Create Account" onPress={onCreateAccountPressed} />
      
      <View style={isStyleEnabled ? styles.msg : null}>
          <Text style={styles.msgmini}>{msg}</Text>
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
    selectionSelectionWrapper: {
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        top: -194,
    },
    selectionAccount: {
        height: 66,
        width: '100%',
        top:-194,
  },
    selectionOverlapGroup: {
        backgroundColor: "#0c89ce",
        height: 66,
        width: '100%',
        top:-194,
  },
    selectionCreateAccount: {
        fontWeight: 'semibold',
        color: 'white',
        fontSize: 18,
        alignItems: 'center',
        display: 'flex',
        lineHeight: 36,
        position: 'absolute',
        padding: 12,
        left: 90,   
  },
  msg: {
    position: 'absolute',
    width: 320,
    height: 66,
    left: 52,
    top: '75%',
    backgroundColor: '#4eb6f180',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgmini: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },




    
});


export default CreateAccountScreen