import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import HomeComponent from './components/HomeCmponent'


export default function App() {
  const [testing,setTesting]= useState()
  return (
    // <View style={styles.container}>
    //   <HomeComponent testing="ini saya menggunakan file dari home component" />
    //   <TextInput 
    //   style={{height:40,width:300,borderColor:'gray',borderWidth:1}}
    //   onChangeText={text=> setTesting(text)}
    //   />
    //   <Text>{testing}</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <View style={{width:50, height:50,backgroundColor:'powderblue'}}/>
      <View style={{width:50, height:50,backgroundColor:'skyblue'}}/>
      <View style={{width:50, height:50,backgroundColor:'red'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
   },
   
  
});
