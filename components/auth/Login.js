import React from "react";
import { useState } from "react";
import { View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import firebase from "firebase/app";
import "firebase/auth";
import ButtonPrimary from "../Button/ButtonPrimary";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogIn = () => {
    const email = userEmail;
    const password = userPassword;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error Code", errorCode);
        console.log("Error Message", errorMessage);
      });
  };

  return (
    <View>
      <Input
        placeholder='Email'
        onChangeText={(email) => setUserEmail(email)}
        leftIcon={
          <Icon name='envelope' size={20} color='black' />
        }
      />
      <Input
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={(password) =>
          setUserPassword(password)
        }
        leftIcon={
          <Icon name='unlock-alt' size={24} color='black' />
        }
      />
      <ButtonPrimary
        text='Login'
        onPress={() => handleLogIn()}
      />
    </View>
  );
};

export default Login;
