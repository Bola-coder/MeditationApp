import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Defs, ClipPath, Path, Svg } from "react-native-svg";

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.auth}>
      <View style={styles.images}>
        <Image source={require("./../assets/logo.png")} style={styles.logo} />
        <Image
          source={require("./../assets/SilentMoon.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.mainText}>We are what we do</Text>
        <Text style={styles.subText}>
          Thousand of people are using silent moon for meditations
        </Text>
      </View>

      <View style={styles.cta}>
        <TouchableOpacity
          style={styles.signupBtn}
          activeOpacity={0.7}
          onPress={() => {
            navigation.push("Signup");
          }}
        >
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.footText}>
          Already have an account? <Text style={styles.loginText}>LOG IN</Text>
        </Text>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  auth: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  images: {
    paddingTop: 50,
    width: "100%",
    height: "50%",
    paddingVertical: "15%",
    alignItems: "center",
    backgroundColor: "#f2eaea",
  },

  logo: {
    marginVertical: 20,
  },

  img: {
    marginTop: 20,
  },

  textGroup: {
    marginTop: "15%",
  },

  mainText: {
    fontSize: 45,
    fontWeight: 700,
    textAlign: "center",
    color: "#3F414E",
  },
  subText: {
    width: "90%",
    fontSize: 26,
    fontWeight: 500,
    textAlign: "center",
    alignSelf: "center",
    color: "#A1A4B2",
    marginTop: 10,
  },

  cta: {
    marginTop: "15%",
    alignItems: "center",
  },

  signupBtn: {
    width: "90%",
    backgroundColor: "#8E97FD",
    padding: 20,
    borderRadius: 40,
  },

  signupText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 25,
  },

  footText: {
    fontSize: 25,
    fontWeight: 500,
    padding: 20,
    color: "#A1A4B2",
  },

  loginText: {
    fontSize: 23,
    color: "#8E97FD",
  },
});
