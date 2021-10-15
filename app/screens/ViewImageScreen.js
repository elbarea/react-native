import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.img}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  closeIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 20,
    left: 30,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 20,
    right: 30,
    backgroundColor: colors.secondary,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});