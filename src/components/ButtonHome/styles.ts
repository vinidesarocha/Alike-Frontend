import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isBlue: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  shadow-color: #0f2d49;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 10;

  width: 60%;
  height: 40px;
  background: #0f2d49;
  ${(props) =>
    !props.isBlue &&
    css`
      background: #eb1161;
    `}

  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  border: 2px solid #fcfcfc;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #fcfcfc;
  font-size: 18px;
`;
