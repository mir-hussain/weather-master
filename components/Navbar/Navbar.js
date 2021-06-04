import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import ButtonSecondary from "../Button/ButtonSecondary";

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
      <Text>Hello There</Text>
      <ButtonSecondary
        text='Log out'
        onPress={handleSignOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    width: "100%",
    paddingHorizontal: 15,
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : 0,
  },
});

export default Navbar;
