import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'

type Props = {
  text: string
  textColor: string
  textBackgroundColor: string
  onPress: () => void
}

export const Button = ({
  text,
  textColor,
  textBackgroundColor,
  onPress
}: Props) => {
  return (
    <Wrapper background={textBackgroundColor} onPress={onPress}>
      <ButtonText color={textColor}>{text}</ButtonText>
    </Wrapper>
  )
}

const Wrapper = styled(TouchableOpacity)<{ background: string }>`
  width: 200px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ background }) => background};
  align-items: center;
  justify-content: center;
`

const ButtonText = styled(Text)<{ color: string }>`
  font-weight: bold;
  color: ${({ color }) => color};
`
