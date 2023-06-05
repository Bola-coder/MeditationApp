import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
const AuthButton = ({
  text,
  bgColor,
  textColor,
  iconName,
  iconColor,
  iconImage,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: bgColor,
          borderRadius: 1,
          borderColor: "#000",
          borderRadius: 40,
        },
      ]}
      activeOpacity={0.8}
    >
      {iconName ? (
        <FontAwesomeIcon
          name={iconName}
          size={30}
          style={styles.icon}
          color={iconColor}
        />
      ) : (
        <Image source={iconImage} style={styles.img} />
      )}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  btn: {
    width: "95%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },

  icon: {
    flex: 1,
  },

  img: {
    width: 25,
    height: 25,
    flex: 1,
  },

  text: {
    fontSize: 25,
    fontWeight: 500,
    flex: 6,
  },
});
