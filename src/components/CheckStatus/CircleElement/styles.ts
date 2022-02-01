import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface CircleProps {
  isWhite: boolean;
}

export const Circle = styled.View<CircleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;
  border-radius: 50px;

  background: #0f2d49;
  ${(props) =>
    !props.isWhite &&
    css`
      background: #efefef;
    `}

  shadow-color: #0f2d49;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 10;
`;

export const Icon = styled(FeatherIcon)`
  color: #0f2d49;
`;
