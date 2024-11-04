import React ,{useState}from 'react'
import {View,Text,StyleSheet } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

function Create(props) {
    const [title,setTitle] =useState("")
    const [body,setBody] =useState("")

    const insertData = () => {
      fetch('http://172.20.10.3:3000/add',{
        method : 'POST',
        headers : {
          'Content-Type':'application/json'
        },
        body : JSON.stringify({title:title,body:body})
      })
        .then(resp => {
            console.log(resp.headers)
            return resp.json();
        })
        .then(data => {
            props.navigation.navigate('Test')
        })
        .catch(error => 
          console.error(error)
        )
    }
  return (
    <View> 
        <TextInput style={styles.inputStyle}
        label ="title"
        value = {title}
        mode="outlined"
        onChangeText={text=>setTitle(text)}
        />
        <TextInput style = {{padding:15}}
        label ="description"
        value = {body}
        mode="outlined"
        multiline
        numberOfLines={10}
        onChangeText={text=>setBody(text)}
        />
        <Button
        style={{margin:10}}
        icon = "pencil"
        mode="contained"
        onPress={()=>insertData()}

        >insert articale</Button>

    </View>
  )
}
const styles = StyleSheet.create({
    inputStyle:{
        padding:10,
        marginTop:30
    }
})

export default Create