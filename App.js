import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import homescreen from './screens/homescreens/homescreen';
import managerHome from './screens/homescreens/managerHome';
import fastListarOS  from './screens/OrdensServico/fastListarOS';
import ModalOS  from './screens/detalhes/ModalOS';
import createUser from './screens/createUser';
import myOS from './screens/OrdensServico/myOS';
import listaEmp from './screens/Employees/listaEmp';
import osDist from './screens/Distribuir/osDist';
import ModalDist from './screens/detalhes/ModalDist';
import detalhesDist from './screens/Distribuir/detalhesDist';
import detalhesEmp from './screens/Employees/detalhesEmp';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= "login" component={login} options={{title: 'Login'}} />
            <Stack.Screen name= "homescreen" component={homescreen} options={{title: 'Home Employee'}} />
            <Stack.Screen name= "managerHome" component={managerHome} options={{title: 'Home Manager'}} />
            <Stack.Screen name= "createUser" component={createUser} options={{title: 'Criar novo usuario'}} />
            <Stack.Screen name= "fastListarOS" component={fastListarOS} options={{title: 'Lista de Ordens Abertas'}} />
            <Stack.Screen name= "myOS" component={myOS} options={{title: 'Minhas Ordens Abertas'}} />
            <Stack.Screen name= "listaEmp" component={listaEmp} options={{title: 'Lista de Funcionarios'}} />
            <Stack.Screen name= "osDist" component={osDist} options={{title: 'Lista de Os distribuidas'}} />
            <Stack.Screen name= "ModalOS" component={ModalOS} options={{title: 'Ordem de Servico'}} screenOptions={{presetation:'modal'}} />
            <Stack.Screen name= "ModalDist" component={ModalDist} options={{title: 'Escolha um funcionario para distribuir a ordem'}} screenOptions={{presetation:'modal'}} />
            <Stack.Screen name= "detalhesDist" component={detalhesDist} options={{title: 'Ordem de Servico'}} screenOptions={{presetation:'modal'}} />
            <Stack.Screen name= "detalhesEmp" component={detalhesEmp} options={{title: 'Detalhes do funcionario'}} screenOptions={{presetation:'modal'}} />

        </Stack.Navigator>    
    </NavigationContainer>

  );
}


export default App;




