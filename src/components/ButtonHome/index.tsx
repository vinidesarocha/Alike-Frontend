import React, { useCallback, useState } from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  colorBlue: boolean;
}

const ButtonHome: React.FC<ButtonProps> = ({
  children,
  colorBlue,
  ...rest
}) => {
  const [isBlue, setIsBlue] = useState(true);

  const handleIsBlue = useCallback(() => {
    if (!colorBlue) {
      setIsBlue(false);
    }
  }, [colorBlue]);

  return (
    <Container isBlue={isBlue} onLayout={handleIsBlue} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default ButtonHome;
