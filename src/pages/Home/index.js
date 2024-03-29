import React, { useContext, useState } from 'react';
import { StatusBar } from 'react-native';
// import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

import { AuthContext } from '~/contexts/auth';

import Header from '../../components/Header';

import NovasAulasList from '../../components/NovasAulasList';

import { Background, ContainerAulas, Nome, Title, List } from './styles';

export default function Home() {
  // Aqui eke da erro pq não está sendo usado
  // Set novas aulas faltando adicionar depois
  const [novasaulas] = useState([
    {
      key: '1',
      tipo: 'Aula',
      valor: 'Matematica',
      url: 'https://www.youtube.com/watch?v=GFuM-L3X0Uk',
    },

    { key: '2', tipo: 'Aula', valor: 'Portugues' },

    { key: '3', tipo: 'Aula', valor: 'Ingles' },

    { key: '4', tipo: 'Aula', valor: 'Historia' },

    { key: '5', tipo: 'Aula', valor: 'Quimica' },
  ]);

  const {
    user: { serie },
  } = useContext(AuthContext);

  return (
    <Background>
      <StatusBar backgroundColor="transparent" translucent />
      {/*<AnimatedLinearGradient*/}
      {/*  customColors={['#f3f781', '#FACC2E', '#f3f781']}*/}
      {/*  speed={800}*/}
      {/*>*/}
      <Header />

      <Title>Novas Aulas</Title>

      <ContainerAulas>
        <List
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={novasaulas}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <NovasAulasList data={item} />}
        />
      </ContainerAulas>
      {/* </AnimatedLinearGradient> */}
    </Background>
  );
}
