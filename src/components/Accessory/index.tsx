import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Container, Name, Title } from './styles';

interface Props {
  name: string | number;
  icon?: React.FC<SvgProps>;
  title: string | number;
}

export const Accessory: React.FC<Props> = ({ name, title, icon: Icon }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Title>{title}</Title>

      <Name>{name}</Name>
    </Container>
  );
};
