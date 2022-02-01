import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  height: 30%;
  width: 100%;
`;

export const ContainerCheck = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  padding-top: 13%;
  font-size: 30px;
  color: #fcfcfc;
  font-family: 'Montserrat-Bold';
`;

export const CheckBar = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 10%;
`;

export const ContainerInformations = styled.View`
  margin-right: 42px;
  margin-left: 42px;
`;

export const TitleOption = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 24px;
  color: #0f2d49;
  font-family: 'Montserrat-Bold';
  margin-bottom: 20px;
`;
