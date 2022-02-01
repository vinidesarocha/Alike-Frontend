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

const ProfileTwo: React.FC = () => {
  return (
    <>
      <Background source={BackgroundProfileOne}>
        <ContainerCheck>
          <Title>Perfil</Title>
          <CheckBar>
            <CircleElement colorWhite icon="check" />
            <LineElement colorWhite />
            <CircleElement />
            <LineElement />
            <CircleElement />
            <LineElement />
            <CircleElement />
          </CheckBar>
        </ContainerCheck>
      </Background>

      <ContainerInformations>
        <TitleOption>Data de nascimento</TitleOption>
        <View>
          <ChooseOptionOne />
        </View>
        <TitleOption>Gostaria de mostrar o seu signo?</TitleOption>
        <View style={{ marginBottom: '20%' }}>
          <ChooseOptionTwo />
        </View>
        <GoOn name="Próximo" />
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

export default ProfileTwo;
