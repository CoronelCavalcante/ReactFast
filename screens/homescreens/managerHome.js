import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect  } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Location from 'expo-location';


export default function managerHome( {route , navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
     

      <StatusBar style="auto" />
      <View style={styles.inputView}>
      {console.log(route.params.token)}
      <TouchableOpacity style={styles.TextInput} onPress={()=>{navigation.navigate('fastListarOS', {token: route.params.token})}}>
      <Text style={[{color: 'white'}]}>Ordens de Servicos</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.inputView}>
      <TouchableOpacity style={styles.TextInput} onPress={()=>{navigation.navigate('osDist', {token: route.params.token})}}>
      <Text style={[{color: 'white'}]}>Ordens Distribuidas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
      <TouchableOpacity style={styles.TextInput} onPress={()=>{navigation.navigate('createUser', {token: route.params.token})}}>
      <Text style={[{color: 'white'}]}>Criar Usuario</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.inputView}>
      <TouchableOpacity style={styles.TextInput} onPress={()=>{navigation.navigate('myOS', {token: route.params.token})}}>
      <Text style={[{color: 'white'}]}>Minhas Ordens</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
      <TouchableOpacity style={styles.TextInput} onPress={()=>{navigation.navigate('listaEmp', {token: route.params.token})}}>
      <Text style={[{color: 'white'}]}>Lista de funcionarios</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <Text>{text}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#1676DD",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white'
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1676DD",
  },
});