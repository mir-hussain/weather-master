import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import Navbar from "../Navbar/Navbar";
import Result from "../Result/Result";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Navbar />
      </View>
      <View>
        <Result />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellowgreen",
  },
});

export default Home;
