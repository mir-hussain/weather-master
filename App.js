import React, { useState } from "react";
import { Text, View } from "react-native";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";
import HomeScreen from "./components/Home/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import firebase from "firebase/app";
import "firebase/auth";

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

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      setLoaded(true);
      setLoggedIn(false);
    } else {
      setLoaded(true);
      setLoggedIn(true);
    }
  });

  return (
    <>
      {!loaded ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> Loading </Text>
        </View>
      ) : !loggedIn ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen
              name='Landing'
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
            />
            <Stack.Screen
              name='Login'
              component={LoginScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
