import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = (props) => {
  const [email, Setemail] = useState();
  const [password, SetPassword] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email.."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
            Setemail(text);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password.."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
            SetPassword(text);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Forget Password");
        }}
      >
        <Text style={styles.forget}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => {
          props.navigation.navigate('Album')
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Signup");
        }}
        
      >
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor: "#003f5c",
     alignItems:'center',
     justifyContent:'center'
  },
  logo:{
    fontWeight:'bold',
    fontSize:50,
    color:'#fb5b5a',
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:'center',
    padding:20
  },
  inputText:{
    height:50,
    color:'white'
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:'white'
  },
  forget:{
     color:'white',
     fontSize:11
  }

});

export default Login;
