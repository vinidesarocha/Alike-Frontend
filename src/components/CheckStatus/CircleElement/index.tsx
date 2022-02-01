import React, { useState, useCallback } from 'react';
import { ViewProps } from 'react-native';

import { Circle, Icon } from './styles';

interface CircleProps extends ViewProps {
  colorWhite?: boolean;
  icon?: string | any;
}

const CircleElement: React.FC<CircleProps> = ({
  colorWhite,
  icon,
  ...rest
}) => {
  const [isWhite, setIsWhite] = useState(false);
  const [isIcon, setIcon] = useState(false);

  const handleIsWhite = useCallback(() => {
    setIsWhite(!colorWhite);
  }, [colorWhite]);

  const handleIsIcon = useCallback(() => {
    if (icon) {
      setIcon(!!icon);
    }
  }, [icon]);

  return (
    <>
      <Circle isWhite={isWhite} onLayout={handleIsWhite} {...rest}>
        <Icon onLayout={handleIsIcon} name={icon} size={40} />
      </Circle>
    </>
  );
};

export default CircleElement;
