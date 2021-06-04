import React from "react";
import { Button, Text, View } from "react-native";

import firebase from "firebase/app";
import "firebase/auth";
import ButtonPrimary from "../Button/ButtonPrimary";

const Home = () => {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is home</Text>
      <ButtonPrimary />
      <Button title='Logout' onPress={handleSignOut} />
    </View>
  );
};

export default Home;
