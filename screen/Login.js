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
      <View>
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
      <TouchableOpacity
        onPress={() => {
          console.log("Login");
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

const styles = StyleSheet.create({});

export default Login;
