import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Colors from "../../StyleRules/Color";

const ButtonPrimary = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.green,
    paddingHorizontal: 8,
    paddingVertical: 14,
    margin: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ButtonPrimary;
