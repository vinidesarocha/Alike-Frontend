import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const BorderBottom = styled.View<ContainerProps>`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #0f2d49;
  margin-bottom: 30px;

  ${(props) =>
    props.isErrored &&
    css`
      border-bottom-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-bottom-color: #588ec0;
    `}
`;

export const Container = styled.View`
  width: 80%;
  height: 50px;
  padding: 0 16px;
  background: transparent;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #0f2d49;
  font-size: 16px;
  width: 100%;
  font-family: 'Montserrat-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
