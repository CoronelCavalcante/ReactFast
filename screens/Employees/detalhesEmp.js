import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert
} from "react-native";



//supostamente nao tem problema se o cliente nao tem login mas ainda falta teste
export default function destalhesEmp({route , navigation}){
  var manager = ''
  route.params.obj.manager == true ? (manager = 'Sim') : (manager = 'Nao');
 
  function deletar(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+route.params.token.access_token);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://168.195.212.5:8000/users/"+route.params.obj.id, requestOptions)
      .then(response => response.text())
      .then(result => Alert.alert(result))
      .then(navigation.goBack())
      .catch(error => console.log('error', error));
  };

  const [isLoading, setLoading] = useState(true);
  const [OS, setOS] = useState([]);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+route.params.token.access_token);
  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };
  useEffect(() => {fetch("http://168.195.212.5:8000/OS/emp/"+route.params.obj.id.toString(), requestOptions)
  .then(response => response.json())
  .then(result => setOS(result))
  .then(OS.length!=0 ? (setLoading(false)) : (console.log("is loading ta como: ",isLoading)))
  .catch(error => console.log('error', error));})




    function Listar(obj) {
      return(          
          <View>
            <Text style={styles.cell}>   
              ID Ordem: {obj.ordem_servico.id}
              {'\n'}
              Nome do cliente: {obj.cliente.razao}
              ordem aberta em: {obj.created_at}
              ordem dada por: {obj.givem_by}
              ordem completada: {obj.completed}             
                                                        
            </Text>
          </View>
          );
  
      }
      ;



    return (
    <View style={styles.container}>
        {isLoading ? (<View><Text>Aguarde!</Text></View>) : 
                (
                    
                    <> 
                    <View>
                        <Text style={styles.topo}>Email: {route.params.obj.email}</Text>
                        <Text>id: {route.params.obj.id}</Text>
                        <Text>manager: {manager}</Text>
                        <Text>criado em: {route.params.obj.created_at}</Text>
                        <Button 
                        onPress={()=> Alert.alert(
                          "Deletar funcionario?",
                          "Voce tocou no funcionario "+route.params.obj.email+" tem certeza que quer delta-lo?",                          
                          [
                              {text: "Cancelar", onPress:()=>console.log("CANCELADO"),
                              style: "cancel"},
                              {text: "Confirmar", onPress:()=>{deletar()}}
                              
                          ]

                        )}
                        title="Deletar Funcionario"/>

                        <FlatList
                        data={OS}
                        renderItem={({item, index})=>
                        Listar(item, index)
                
                            }
                
                        />
                        
                    </View>
                    
                </>
                
                )}

    </View>
    );
    }

    
const styles = StyleSheet.create({
  container: {
      alignSelf: 'stretch',
      textAlign: 'left',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
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
  topo: {
    height: 50,
    padding: 10,
    color: 'black',
    fontSize: 18

  },



  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
    color: 'black'
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
  lista:{

    padding: 24,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    cell:{
    padding: 18,    
    borderRadius: 5,    
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor:"#3D95D8",
    fontSize: 18,
    marginBottom: 2, 
    color: 'white',
    }
});