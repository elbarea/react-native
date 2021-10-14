import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(StatusBar.currentHeight);
  const { landscape } = useDeviceOrientation();
  return (
    <View style={{backgroundColor: "#ffff", flex: 1}}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          flex: 1
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1
        }}
      ></View>

      <StatusBar style="auto" />
    </View>
  );
}
