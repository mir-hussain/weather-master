import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

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
      <TextInput
        placeholder='Email'
        onChangeText={(email) => setUserEmail(email)}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={(password) =>
          setUserPassword(password)
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
