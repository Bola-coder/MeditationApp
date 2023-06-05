import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect } from "react";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const homeTimeoit = setTimeout(() => {
      navigation.push("Topic");
    }, 3000);

    return () => clearTimeout(homeTimeoit);
  }, []);

  return (
    <SafeAreaView style={styles.home}>
      <Image
        source={require("./../assets/whiteLogo.png")}
        style={styles.logo}
      />
      <View style={styles.textGroup}>
        <Text style={styles.maintext}>Hi Afsar, Welcome to Silent Moon</Text>
        <Text style={styles.subtext}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/womanMeditating.png")}
          style={styles.woman}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    backgroundColor: "#808AFF",
    height: "100%",
    alignItems: "center",
  },

  logo: {
    marginVertical: 30,
  },

  textGroup: {
    padding: 20,
    width: "90%",
  },

  maintext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35,
    fontWeight: 600,
  },
  subtext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 30,
  },

  imageContainer: {
    marginTop: "5%",
  },

  woman: {
    // width: "90%",
    // height: "90%",
  },
});
