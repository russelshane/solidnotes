import React from 'react';
import { ContainerElement } from './style';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({ style, children }) => {
  return <ContainerElement style={style}>{children}</ContainerElement>;
};

export default Container;
