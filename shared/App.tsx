import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppScreen } from "./src/components/screens/AppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AppScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
