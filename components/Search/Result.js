import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../StyleRules/Color";

const Result = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>
        Search Result For {weather?.name}
      </Text>
      <View style={styles.searchResultContainer}>
        <View style={styles.searchResult}>
          <Text style={styles.data}>
            {weather?.weather?.[0]?.main}
          </Text>
          <Text style={styles.searchResultTitle}>
            Weather
          </Text>
        </View>
        <View style={styles.searchResult}>
          <Text style={styles.data}>
            {Math.floor(weather?.main?.temp)}° C
          </Text>
          <Text style={styles.searchResultTitle}>
            Temperature
          </Text>
        </View>
        <View style={styles.searchResult}>
          <Text style={styles.data}>
            {Math.floor(weather?.main?.feels_like)}° C
          </Text>
          <Text style={styles.searchResultTitle}>
            Feels Like
          </Text>
        </View>
        <View style={styles.searchResult}>
          <Text style={styles.data}>
            {weather?.clouds?.all} %
          </Text>
          <Text style={styles.searchResultTitle}>
            Clouds
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
  },
  searchResultContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
  },
  cityName: {
    textAlign: "center",
    fontSize: 20,
  },
  searchResult: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    width: "80%",
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
  },
  searchResultTitle: {},
  data: {
    fontSize: 30,
  },
});

export default Result;
