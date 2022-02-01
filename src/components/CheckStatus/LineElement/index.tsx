import React, { useState, useCallback } from 'react';
import { ViewProps } from 'react-native';

import { Line } from './styles';

interface LineProps extends ViewProps {
  colorWhite?: boolean;
}

const LineElement: React.FC<LineProps> = ({ colorWhite, ...rest }) => {
  const [isWhite, setIsWhite] = useState(false);

  const handleIsWhite = useCallback(() => {
    setIsWhite(!colorWhite);
  }, [colorWhite]);
  return <Line isWhite={isWhite} onLayout={handleIsWhite} {...rest} />;
};

export default LineElement;
