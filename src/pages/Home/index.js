import React, { useContext, useState } from 'react';

import { Image } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';

import NovasAulasList from '../../components/NovasAulasList';

import { Background, Container, Nome, SerieTurno, Title, List } from './styles';

export default function Home() {
  // Aqui eke da erro pq não está sendo usado
  // Set novas aulas faltando adicionar depois
  const [novasaulas] = useState([
    { key: '1', tipo: 'Aula', valor: 'Matematica' },

    { key: '2', tipo: 'Aula', valor: 'Portugues' },

    { key: '3', tipo: 'Aula', valor: 'Ingles' },

    { key: '4', tipo: 'Aula', valor: 'Historia' },

    { key: '5', tipo: 'Aula', valor: 'Quimica' },
  ]);

  const {
    user: { nome, serie, avatar },
  } = useContext(AuthContext);

  return (
    <Background>
      <Header />

      <Container>
        <Nome>{nome}</Nome>

        <SerieTurno>{serie}</SerieTurno>

        <Image
          source={{ uri: avatar }}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </Container>

      <Title>Novas Aulas</Title>

      <List
        horizontal
        showsVerticalScrollIndicator={false}
        data={novasaulas}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <NovasAulasList data={item} />}
      />
    </Background>
  );
}
