import React from 'react';
import { Text } from 'react-native';

import Header from '../../components/Header';
import { Container } from './styles';

export default function Chamada() {
  return (
    <>
      <Header />
      <Container>
        <Text>Chamada</Text>
      </Container>
    </>
  );
}
