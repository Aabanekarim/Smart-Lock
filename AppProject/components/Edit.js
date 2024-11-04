import React ,{useState}from 'react'
import {View,Text,StyleSheet } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Edit(props) {
  const navigation = useNavigation();
    const data = props.route.params.data;
    const fname = props.route.params.fname;
    const lname = props.route.params.lname;
    const ida = props.route.params.ida;
    const [firstname,setFirstname] =useState(data.firstname)
    const [lastname,setLastname] =useState(data.lastname)

    const updatetData = () => {
      fetch(`http://172.20.10.3:3000/update/${data.id}/`,{
        method : 'PUT',
        headers : {
          'Content-Type':'application/json'
        },
        body : JSON.stringify({firstname:firstname,lastname:lastname})
      })
        .then(resp => {
            console.log(resp.headers)
            return resp.json();
        })
        .then(data => {
            navigation.navigate('Root',{id:ida,firstname:fname,lastname:lname})
        })
        .catch(error => 
          console.error(error)
        )
    }
  return (
    <View> 
        <TextInput style={styles.inputStyle}
        label ="firstname"
        value = {firstname}
        mode="outlined"
        onChangeText={text=>setFirstname(text)}
        />
        <TextInput style = {{padding:15}}
        label ="lastname"
        value = {lastname}
        mode="outlined"
        onChangeText={text=>setLastname(text)}
        />
        <Button
        style={{margin:10}}
        icon = "update"
        mode="contained"
        onPress={()=>updatetData()}

        >update articale</Button>

    </View>
  )
}
const styles = StyleSheet.create({
    inputStyle:{
        padding:10,
        marginTop:30
    }
})

export default Edit