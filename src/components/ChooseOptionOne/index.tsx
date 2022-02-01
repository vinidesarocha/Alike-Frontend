import React, { useState, useEffect } from 'react';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TextChooseOption,
  CircleWoman,
  CircleMan,
  Option,
  CircleOther,
} from './styles';

const ChooseOptionOne: React.FC = ({ ...rest }) => {
  const [man, setMan] = useState(false);
  const [woman, setWoman] = useState(false);
  const [other, setOther] = useState(false);
  const [choice, setChoice] = useState('');

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <Container choice={choice} {...rest}>
      <Option>
        <CircleWoman
          man={man}
          woman={woman}
          other={other}
          onPress={() => {
            setMan(false);
            setWoman(true);
            setOther(false);
            setChoice('Mulher');
          }}
        >
          <IconMaterialCommunityIcons
            name="gender-female"
            size={45}
            color="#fcfcfc"
          />
        </CircleWoman>
        <TextChooseOption>Mulher</TextChooseOption>
      </Option>

      <Option style={{ marginRight: '10%', marginLeft: '10%' }}>
        <CircleMan
          man={man}
          woman={woman}
          other={other}
          onPress={() => {
            setMan(true);
            setWoman(false);
            setOther(false);
            setChoice('Homem');
          }}
        >
          <IconMaterialCommunityIcons
            name="gender-male"
            size={40}
            color="#fcfcfc"
          />
        </CircleMan>
        <TextChooseOption>Homem</TextChooseOption>
      </Option>

      <Option>
        <CircleOther
          man={man}
          woman={woman}
          other={other}
          onPress={() => {
            setMan(false);
            setWoman(false);
            setOther(true);
            setChoice('Outro');
          }}
        >
          <IconFeather name="rotate-ccw" size={35} color="#fcfcfc" />
        </CircleOther>
        <TextChooseOption>Outro</TextChooseOption>
      </Option>
    </Container>
  );
};

export default ChooseOptionOne;
