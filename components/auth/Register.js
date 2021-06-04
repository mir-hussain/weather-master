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

const firebaseConfig = {
  apiKey: "AIzaSyBwxCdJI81FSyPxXh0zEfMgMnOWqMbEZ2A",
  authDomain: "the-pill-club110.firebaseapp.com",
  projectId: "the-pill-club110",
  storageBucket: "the-pill-club110.appspot.com",
  messagingSenderId: "286060289646",
  appId: "1:286060289646:web:515c7ad4e3552e9a1cd07f",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");

  const onSignUp = () => {
    const email = userEmail;
    const password = userPassword;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
        placeholder='Name'
        onChangeText={(name) => setUserName(name)}
      />
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
        text='Sign Up'
        onPress={() => onSignUp()}
      />
    </View>
  );
};

export default Register;
