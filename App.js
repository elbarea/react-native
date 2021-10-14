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
    <View style={{ backgroundColor: "#ffff", flex: 1, flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>

      <StatusBar style="auto" />
    </View>
  );
}
