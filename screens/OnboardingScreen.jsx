import { View, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
// import Logo from "./../assets/meditation/logo.png";
// import SilentMoon from "./../assets/meditation/SilentMoon.png";

const OnboardingScreen = ({ navigation }) => {
  useEffect(() => {
    console.log("Onboarding Screen");
    const onboardingTimeout = setTimeout(() => {
      navigation.replace("Auth");
    }, 3000);

    return () => clearTimeout(onboardingTimeout);
  }, []);

  return (
    <View style={styles.onboarding}>
      <Image source={require("./../assets/logo.png")} style={styles.logo} />
      <Image
        source={require("./../assets/SilentMoon.png")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding: {
    paddingVertical: 40,
    height: "100%",
  },

  logo: {
    marginTop: "10%",
    alignSelf: "center",
  },

  img: {
    marginTop: "70%",
    alignSelf: "center",
  },
});

export default OnboardingScreen;
