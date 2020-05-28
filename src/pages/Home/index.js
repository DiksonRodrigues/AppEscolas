import React, { useContext, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import NovasAulasList from '../../components/NovasAulasList';

import { Background, Container, Nome, SerieTurno, Title, List } from './styles';

export default function Home() {
  const [novasaulas, setNovasAulas] = useState([
    { key: '1', tipo: 'Aula', valor: 'Matematica' },
    { key: '2', tipo: 'Aula', valor: 'Portugues' },
    { key: '3', tipo: 'Aula', valor: 'Ingles' },
    { key: '4', tipo: 'Aula', valor: 'Historia' },
    { key: '5', tipo: 'Aula', valor: 'Quimica' },
  ]);

  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.nome}</Nome>
        <SerieTurno>{user && user.serie}</SerieTurno>
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
