import React from "react";
import { Text, View, StyleSheet } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import ButtonPrimary from "../Button/ButtonPrimary";

const Navbar = () => {
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
    <View style={styles.container}>
      <Text>Mir Hussain</Text>
      <ButtonPrimary
        text='Log out'
        onPress={handleSignOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
});

export default Navbar;
