import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function Pessoais() {
  return (
    <View style={estilos.container}>
      <Image 
        source={{ uri: 'https://i.pravatar.cc/500' }}
        style={estilos.imagemPerfil}
      />
      <Text style={estilos.nome}>Arwen Romero</Text>
      <Text style={estilos.info}>Endereço</Text>
      <Text style={estilos.info}>(67) 99 88888-6666</Text>
      <Text style={estilos.info}>arwen@gmail.com</Text>
      <Text style={estilos.bio}>Meu nome é arwen e esse é o TP2...</Text>
      <View style={estilos.iconesSociais}>
        <FontAwesome name="youtube" size={24} color="black" />
        <FontAwesome name="facebook" size={24} color="black" />
        <FontAwesome name="twitter" size={24} color="black" />
        <FontAwesome name="instagram" size={24} color="black" />
      </View>
    </View>
  );
}

function Academico() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Formação Acadêmica</Text>
      <Text style={estilos.info}>Instituição: INFNET</Text>
      <Text style={estilos.info}>Curso: Engenharia de Software</Text>
      <Text style={estilos.info}>Ano de Conclusão: 2027</Text>
    </View>
  );
}

function Experiencia() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Experiências Profissionais</Text>
      <Text style={estilos.info}>Empresa: Nome da Empresa</Text>
      <Text style={estilos.info}>Cargo: Seu Cargo</Text>
      <Text style={estilos.info}>Período: Mês/Ano - Mês/Ano</Text>
      <Text style={estilos.descricao}>Descrição: Descrição aq...</Text>
    </View>
  );
}

function Idiomas() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Idiomas</Text>
      <Text style={estilos.info}>Inglês - Avançado</Text>
      <Text style={estilos.info}>Espanhol - Fluente</Text>
    </View>
  );
}

function HabilidadesSociais() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Soft Skills</Text>
      <Text style={estilos.info}>Comunicação</Text>
      <Text style={estilos.info}>Trabalho em equipe</Text>
      <Text style={estilos.info}>Resiliência</Text>
      <Text style={estilos.info}>Gestão de tempo</Text>
      <Text style={estilos.info}>Adaptabilidade</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Pessoais">
        <Drawer.Screen name="Pessoais" component={Pessoais} />
        <Drawer.Screen name="Acadêmico" component={Academico} />
        <Drawer.Screen name="Experiência" component={Experiencia} />
        <Drawer.Screen name="Idiomas" component={Idiomas} />
        <Drawer.Screen name="Habilidades Sociais" component={HabilidadesSociais} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  imagemPerfil: {
    width: 243,
    height: 120,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  iconesSociais: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '60%',
  },
  descricao: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
});
