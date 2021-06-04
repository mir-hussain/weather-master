import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";

const Result = () => {
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState("");
  console.log(cityName);
  const handleSearch = () => {
    const key = "4d115ee2c3be33acfe23b0bdf8b2f952";
    useEffect(() => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));
    }, []);
  };
  if (
    Object.keys(weather).length === 0 &&
    weather.constructor === Object
  ) {
    console.log("weather ney");
  } else {
    console.log("Weather ache");
  }
  return (
    <View>
      <Text>Mir</Text>
      <TextInput
        placeholder='city'
        onChangeText={(city) => setCityName(city)}
      />
      <Text>{weather?.name}</Text>
      <Text>Weather: {weather?.weather?.[0]?.main}</Text>
      <Text>
        Temperature: {Math.floor(weather?.main?.temp)}° C
      </Text>
      <Text>
        Feels Like: {Math.floor(weather?.main?.feels_like)}°{" "}
        C
      </Text>
      <Text>Clouds: {weather?.clouds?.all}</Text>
    </View>
  );
};

export default Result;
