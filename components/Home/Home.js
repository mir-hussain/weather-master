import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Colors from "../../StyleRules/Color";

import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Navbar />
      </View>
      <View>
        <Search />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Home;
