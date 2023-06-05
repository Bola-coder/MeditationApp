import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import AuthButton from "../components/AuthButton";
import CheckBox from "@react-native-community/checkbox";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.signup}>
      <Pressable
        style={styles.backIcon}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <IonIcons name="arrow-back" size={30} color={"#3F414E"} />
      </Pressable>
      <Text style={styles.signupHeader}>Create your account</Text>
      <View style={styles.socialAuth}>
        <AuthButton
          text="CONTINUE WITH FACEBOOK"
          bgColor={"#7583CA"}
          textColor={"#FFF"}
          iconName={"facebook"}
          iconColor={"#FFF"}
        />
        <AuthButton
          text="CONTINUE WITH GOOGLE"
          bgColor={"#FFF"}
          textColor={"#000"}
          //   iconName={"google"}
          iconColor={"#000"}
          iconImage={require("./../assets/google2.png")}
        />
      </View>
      <Text style={styles.signupText}>OR LOG IN WITH EMAIL</Text>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email Address" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View>
        <Text>
          I have read the <Text>Privacy Policy</Text>
        </Text>
        <CheckBox disabled={false} />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  signup: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
  },

  backIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#c9c7c7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 30,
  },

  signupHeader: {
    fontSize: 35,
    fontWeight: 700,
    textAlign: "center",
    color: "#3F414E",
    marginBottom: 20,
  },

  socialAuth: {
    padding: 5,
  },

  signupText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    color: "#A1A4B2",
    marginVertical: 5,
  },

  inputGroup: {
    width: "100%",
    padding: 15,
    // backgroundColor: "green",
    alignSelf: "center",
    marginTop: 20,
  },

  input: {
    backgroundColor: "#A1A4B2",
    padding: 15,
    marginBottom: 20,
    borderRadius: 40,
    width: "100%",
    fontSize: 16,
  },
});
