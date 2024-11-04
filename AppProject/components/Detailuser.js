

import React from 'react'
import {View,ScrollView,Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Details(props) {
    const navigation = useNavigation();
    const data = props.route.params.data;
    const fname = props.route.params.fname;
    const lname = props.route.params.lname;
    const ida = props.route.params.ida;
  return (
    <ScrollView>
        <View style = {styles.viewStyle}>
            <Text style = {{fontSize:25}}>
                {data.firstname}
            </Text>
            <Text style = {{fontSize:20,marginTop : 10}}>
                {data.lastname}
            </Text>
            <Text style = {{fontSize:15,marginTop : 10}}>
                {data.date}
            </Text>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    viewStyle : {
        margin:10,
        padding:10
    },
    btnStyle :{
        flexDirection : "row",
        justifyContent : "space-around",
        margin : 15,
        padding : 10
    }
})

export default Details