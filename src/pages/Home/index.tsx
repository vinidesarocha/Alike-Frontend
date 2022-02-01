import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import ButtonHome from '../../components/ButtonHome';

import logoImg from '../../assets/logo/logo.png';
import authBackground from '../../assets/authBackground/authBackground.png';

import { Container, Title, Background } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Background source={authBackground}>
      <Container>
        <Image source={logoImg} />

        <Title>Alike</Title>
        <ButtonHome
          colorBlue={false}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          Sign Up
        </ButtonHome>

        <ButtonHome colorBlue onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </ButtonHome>
      </Container>
    </Background>
  );
};

export default Home;
