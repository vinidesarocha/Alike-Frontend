import React from 'react';

import { FormHandles } from '@unform/core';
import { TextProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextGoOn, Circle } from './styles';

interface GoOnProps extends TextProps {
  name: string;
  formRef?: React.RefObject<FormHandles> | any;
}

const GoOn: React.FC<GoOnProps> = ({ name, formRef, ...rest }) => {
  return (
    <Container {...rest}>
      <TextGoOn>{name}</TextGoOn>
      <Circle onPress={() => formRef.current?.submitForm()}>
        <Icon name="arrow-right" size={40} color="#fcfcfc" />
      </Circle>
    </Container>
  );
};

export default GoOn;
