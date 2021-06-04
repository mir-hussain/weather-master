import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import Result from "./Result";
import { Input, Button } from "react-native-elements";
import Colors from "../../StyleRules/Color";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = () => {
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState("");
  const [userInput, setUserInput] = useState("");

  const key = "4d115ee2c3be33acfe23b0bdf8b2f952";
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [cityName]);

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='city'
          style={styles.searchBox}
          onChangeText={(city) => setUserInput(city)}
        />
        <Button
          icon={{
            name: "search",
            size: 30,
            color: Colors.gray,
          }}
          style={styles.searchButton}
          type='clear'
          onPress={() => setCityName(userInput)}
        />
      </View>
      {cityName.length === 0 ? (
        <View>
          <Text>Search Something</Text>
        </View>
      ) : (
        <Result weather={weather} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  searchBox: {
    width: "70%",
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default Search;
