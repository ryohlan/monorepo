import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const AppScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <StyledText>StyledText</StyledText>
      <TouchableOpacity onPress={() => setCount(c => c + 1)}>
        <Text>count: {count}</Text>
      </TouchableOpacity>
    </View>
  );
};

const StyledText = styled(Text)`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;
