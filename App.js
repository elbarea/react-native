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
          width: 400,
          flexShrink: 1, //let items shrink to fit others items on the screen if overflowing
          height: 100,
          //flexBasis: 100, //item size alogn the primary axis
          //flexGrow: 1,  //same as setting flex property
          //flex: 1
          //flex: -1 //same as setting flexShrink
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
