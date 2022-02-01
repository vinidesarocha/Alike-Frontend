import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextGoOn = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 32px;
  color: #0f2d49;
  margin-right: 90px;
`;

export const Circle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #eb1161;
  height: 90px;
  width: 90px;
  border-radius: 50px;

  shadow-color: #0f2d49;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 10;
`;
