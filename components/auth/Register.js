import React, { useState } from "react";
import { View } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import ButtonPrimary from "../Button/ButtonPrimary";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <Input
        placeholder='Name'
        onChangeText={(name) => setUserName(name)}
        leftIcon={
          <Icon name='user' size={20} color='black' />
        }
      />
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
        text='Sign Up'
        onPress={() => onSignUp()}
      />
    </View>
  );
};

export default Register;
