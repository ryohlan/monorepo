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
      <CountUpButton onPress={() => setCount(c => c + 1)}>
        <CountUpText>count: {count}</CountUpText>
      </CountUpButton>
    </View>
  );
};

const StyledText = styled(Text)`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

const CountUpButton = styled(TouchableOpacity)`
  width: 200px;
  height: 60px;
  border-radius: 30px;
  background-color: #222;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

const CountUpText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
