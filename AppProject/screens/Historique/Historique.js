import React,{useState,useEffect} from 'react'
import {View,Text, Button,FlatList,StyleSheet} from 'react-native'
import {Card,FAB} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

function Historique({route}) {
    const { firstname, lastname, id } = route.params;
  const navigation = useNavigation();
    const [data,setData] = useState([])
    const [loading,setIsLoading] = useState(true)

    const loadData = ()=>{
        fetch('http://172.20.10.3:3000/getall')
        .then(resp => {
            console.log(resp.headers)
            return resp.json();
        })
        .then(article => {
            setData(article)
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        loadData()
    },[])

    

    const clickeditem = (data) => {
        navigation.navigate('Details',{data:data,fname:firstname,lname:lastname,ida:id})
    }

    const renderData = (item) =>{
        return(
            <Card style = {styles.cardStyle}>
                <Text style = {{fontSize:23}} onPress = {() => clickeditem(item) }>{item.firstname}</Text>
                
            </Card>
        )
        /*<FAB style = {styles.fab}
        small={false}
        icon="plus"
        theme={{colors : {accent:"green"}}}
        onPress = {() => navigation.navigate('Create')}
        /> */
    }
  return (
    <View style ={{flex:1}}>
        <FlatList
        data = {data}
        renderItem={({item})=>{
            return renderData(item)
        }}
        onRefresh={() => loadData()}
        refreshing = {loading}
        keyExtractor={item => `${item.id}`}
        />


    </View>
  )
}
const styles = StyleSheet.create({
    cardStyle : {
        margin :10,
        padding : 10
    },
    fab: {
        position :'absolute',
        margin :16,
        right:0,
        bottom:0
    }
})

export default Historique