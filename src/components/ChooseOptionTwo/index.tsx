import React, { useState, useEffect } from 'react';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TextChooseOption,
  CircleWoman,
  CircleMan,
  Option,
  CircleAll,
} from './styles';

const ChooseOptionTwo: React.FC = ({ ...rest }) => {
  const [man, setMan] = useState(false);
  const [woman, setWoman] = useState(false);
  const [all, setAll] = useState(false);
  const [choice, setChoice] = useState('');

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <Container choice={choice} {...rest}>
      <Option>
        <CircleWoman
          woman={woman}
          all={all}
          onPress={() => {
            setMan(false);
            setWoman(true);
            setAll(false);
            setChoice('Mulheres');
          }}
        >
          <IconMaterialCommunityIcons
            name="gender-female"
            size={45}
            color="#fcfcfc"
          />
        </CircleWoman>
        <TextChooseOption>Mulheres</TextChooseOption>
      </Option>

      <Option style={{ marginRight: '10%', marginLeft: '10%' }}>
        <CircleMan
          man={man}
          woman={woman}
          all={all}
          onPress={() => {
            setMan(true);
            setWoman(false);
            setAll(false);
            setChoice('Homens');
          }}
        >
          <IconMaterialCommunityIcons
            name="gender-male"
            size={40}
            color="#fcfcfc"
          />
        </CircleMan>
        <TextChooseOption>Homens</TextChooseOption>
      </Option>

      <Option>
        <CircleAll
          man={man}
          woman={woman}
          all={all}
          onPress={() => {
            setMan(false);
            setWoman(false);
            setAll(true);
            setChoice('Todos');
          }}
        >
          <IconFeather name="crosshair" size={35} color="#fcfcfc" />
        </CircleAll>
        <TextChooseOption>Todos</TextChooseOption>
      </Option>
    </Container>
  );
};

export default ChooseOptionTwo;
