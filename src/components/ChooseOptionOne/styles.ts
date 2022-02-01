import styled, { css } from 'styled-components/native';

interface ContainerProps {
  choice: string;
}

interface CircleProps {
  man: boolean;
  woman: boolean;
  other: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CircleWoman = styled.TouchableOpacity<CircleProps>`
  align-items: center;
  justify-content: center;

  background: #eb1161;
  height: 75px;
  width: 75px;
  border-radius: 50px;

  ${(props) =>
    !props.man &&
    props.woman &&
    !props.other &&
    css`
      border: solid 3px #66cdaa;
    `}

  shadow-color: #0f2d49;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 10;
  margin-bottom: 5px;
`;

export const CircleMan = styled.TouchableOpacity<CircleProps>`
  align-items: center;
  justify-content: center;

  background: #eb1161;
  height: 75px;
  width: 75px;
  border-radius: 50px;

  ${(props) =>
    props.man &&
    !props.woman &&
    !props.other &&
    css`
      border: solid 3px #66cdaa;
    `}

  shadow-color: #0f2d49;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 10;
  margin-bottom: 5px;
`;

export const CircleOther = styled.TouchableOpacity<CircleProps>`
  align-items: center;
  justify-content: center;

  background: #eb1161;
  height: 75px;
  width: 75px;
  border-radius: 50px;

  ${(props) =>
    !props.man &&
    !props.woman &&
    props.other &&
    css`
      border: solid 3px #66cdaa;
    `}

  shadow-color: #0f2d49;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 10;
  margin-bottom: 5px;
`;

export const TextChooseOption = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 14px;
  color: #0f2d49;
`;
