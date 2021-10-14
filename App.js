import React from "react";
import { View, StatusBar } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", //main axis
        alignItems: "center", //secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          alignSelf: "flex-start"
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
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
