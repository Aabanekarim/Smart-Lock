import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import CreateAccountScreen from './screens/CreateAccountScrreen/CreateAccountScreen';
import AjouterUtilisateur from './screens/AjouterUtilisateur/AjouterUtilisateur';
import SupprimerUtilisateur from './screens/SupprimerUtilisateur/SupprimerUtilisateur';
import Historique from './screens/Historique/Historique';
import Ouvrir from './screens/Ouvrir/Ouvrir';
import Contants from 'expo-constants';
import Details from './components/Details';
import Edit from './components/Edit';
import Edith from './components/Edith';
import Detailusers from './components/Detailusers';
import Users from './components/Users';
import Detailuser from './components/Detailuser';
import User from './components/User';
import Admine from './components/Admine';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Getcode from './components/Getcode';



const stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function Root(props) {
  const id = props.route.params.id;
  const firstname = props.route.params.firstname;
  const lastname = props.route.params.lastname;
 

  const screenOptions = ({ route }) => ({
    id:id,
    firstname:firstname,
    lastname:lastname,
    
  });
  
  return (
    <Drawer.Navigator initialRouteName="Ouvrir" screenOptions={screenOptions}>
  <Drawer.Screen name="Ouvrirr" component={Ouvrir} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Getcode" component={Getcode} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Consulter Users" component={Users} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Acces" component={Admine} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Ajouter Utilisateur" component={AjouterUtilisateur} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Supprimer Utilisateur" component={SupprimerUtilisateur} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Consulter Historique" component={Historique} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Create Account" component={CreateAccountScreen} initialParams={{ firstname, lastname, id }} />
</Drawer.Navigator>

  );
  
}
function Root2(props) {
  const id = props.route.params.id;
  const firstname = props.route.params.firstname;
  const lastname = props.route.params.lastname;

  const screenOptions = ({ route }) => ({
    id:id,
    firstname:firstname,
    lastname:lastname,
  });
  return (
    <Drawer.Navigator initialRouteName='Ouvrir' screenOptions={screenOptions}>
      <Drawer.Screen name="Ouvrirr" component={Ouvrir} initialParams={{ firstname, lastname, id }} />
  <Drawer.Screen name="Consulter Users" component={User} initialParams={{ firstname, lastname, id }} />

    </Drawer.Navigator>
  );
}

 function App() {
  
 
  return (
    <View style={styles.container}>
      <stack.Navigator screenOptions={{headerShown : false}}>
        <stack.Screen name = "Home" component = {HomeScreen}/>
        <stack.Screen name = "Sign in" component = {SignInScreen}/>
        <stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Root2"
          component={Root2}
          options={{ headerShown: false }}
        />
        <stack.Screen name = "Ouvrir" component = {Ouvrir}/>
        <stack.Screen name = "Details" component = {Details}/>
        <stack.Screen name = "Detailusers" component = {Detailusers}/>
        <stack.Screen name = "Detailuser" component = {Detailuser}/>
        <stack.Screen name = "Edit" component = {Edit}/>
        <stack.Screen name = "Edith" component = {Edith}/>
        <stack.Screen name = "Create Account" component = {CreateAccountScreen}/>
        <stack.Screen name = "AjouterUtilisateur" component = {AjouterUtilisateur}/>
      </stack.Navigator>
    </View>
  );
}

export default() =>{
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop:Contants.statusBarHeight
  },
});
