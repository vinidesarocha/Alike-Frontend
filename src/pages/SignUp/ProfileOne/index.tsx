import React from 'react';

import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

import BackgroundProfileOne from '../../../assets/backgroundProfile/backgroundProfile.png';

import CircleElement from '../../../components/CheckStatus/CircleElement';
import LineElement from '../../../components/CheckStatus/LineElement';
import ChooseOptionOne from '../../../components/ChooseOptionOne';
import ChooseOptionTwo from '../../../components/ChooseOptionTwo';
import GoOn from '../../../components/GoOn';
import {
  ContainerCheck,
  Background,
  Title,
  CheckBar,
  TitleOption,
  ContainerInformations,
} from './styles';

const ProfileOne: React.FC = () => {
  return (
    <>
      <Background source={BackgroundProfileOne}>
        <ContainerCheck>
          <Title>Perfil</Title>
          <CheckBar>
            <CircleElement colorWhite />
            <LineElement />
            <CircleElement />
            <LineElement />
            <CircleElement />
            <LineElement />
            <CircleElement />
          </CheckBar>
        </ContainerCheck>
      </Background>

      <ContainerInformations>
        <TitleOption style={{ marginRight: '60%' }}>Eu sou</TitleOption>
        <View>
          <ChooseOptionOne />
        </View>
        <TitleOption>Mostre-me</TitleOption>
        <View>
          <ChooseOptionTwo />
        </View>
        <GoOn style={{ flex: 1, paddingTop: '22%' }} name="Próximo" />
      </ContainerInformations>
      {/* <Icon
        style={{ paddingTop: '10%' }}
        name="chevron-left"
        size={60}
        color="#0f2d49"
      /> */}
    </>
  );
};

export default ProfileOne;
