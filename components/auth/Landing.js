import React from "react";
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Image,
} from "react-native";
import ButtonPrimary from "../Button/ButtonPrimary";

import Colors from "../../StyleRules/Color";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            height: 200,
            width: 200,
            uri: "https://live.staticflickr.com/65535/51224632604_69c653973a_o.png",
          }}
        />
        <Text style={styles.introHeader}>
          Get the latest forecast.
        </Text>
        <Text style={styles.introBody}>
          Weather data is on your finger tips.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary
          text='Register'
          onPress={() => navigation.navigate("Register")}
        />
        <ButtonPrimary
          text='Login'
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 200,
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : 0,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  introHeader: {
    color: Colors.gray,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  introBody: {
    color: Colors.lightGray,
    textAlign: "center",
    fontSize: 15,
  },
  buttonContainer: {
    width: "80%",
  },
});

export default Landing;
