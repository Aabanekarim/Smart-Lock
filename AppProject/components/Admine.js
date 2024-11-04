import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React , {useState} from 'react'
import CustomButtonOuvrir from './CustomButtonOpen/CustomButtonOuvrir';
//import { useNavigation } from '@react-navigation/native'
const Ouvrir = ({ route}) => {
  const { firstname, lastname } = route.params;
  const [msg,setMsg]=useState('acces non accorder')
  const [op,setOp] = useState('admine')

//const navigation = useNavigation();

    const onOuvrirPressed = async () => {
        if(op=="nonadmine"){
            setOp('admine')
            setMsg('acces non accorder')
        }
        else{
            setOp('nonadmine')
            setMsg('acces accorder')
        }
      try {
        const response = await fetch('http://172.20.10.3:3000/send-parameter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "op" : op})
        })
        
       
        
      } catch (error) {
        console.error(error);
      }
    }
  return (
    
    <View style={styles.root}>
      <CustomButtonOuvrir text="Acces" onPress={onOuvrirPressed} />
      <View style={styles.msg}>
          <Text style={styles.msgmini}>{msg}</Text>
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

export default Ouvrir