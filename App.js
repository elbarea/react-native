import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";

import WelcomeScreen from "./screens/WelcomeScreen";
export default function App() {
  return <WelcomeScreen />
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    width: "100%",
  },
  backWithLogo: {
    flex: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50
  },
});
