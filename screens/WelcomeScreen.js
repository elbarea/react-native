import React from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backWithLogo}
    >
      <View style={styles.logoWithText}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text>Sell what you don't need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#4ECDC4",
  },
  backWithLogo: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoWithText: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
});
