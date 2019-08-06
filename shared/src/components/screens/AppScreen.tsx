import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const AppScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 300
      }}
    >
      <TouchableOpacity onPress={() => setCount(c => c + 1)}>
        <Text>count: {count}</Text>
      </TouchableOpacity>
    </View>
  );
};
