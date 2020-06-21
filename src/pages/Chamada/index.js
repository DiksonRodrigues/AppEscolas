import React, { useContext, useEffect, useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import styled from 'styled-components';
import { AuthContext } from '~/contexts/auth';

import ItemFlatList from './components/ItemFlatList';

import Header from '../../components/Header';

export default function Chamada() {
  const { getPersonList } = useContext(AuthContext);
  const [desativadoPresente, setDesativadoPresente] = useState(false);
  const [desativadoFaltou, setDesativadoFaltou] = useState(false);
  const [date, setDate] = useState([
    {
      key: '0',
      nome: 'Não há alunos registrados',
    },
  ]);

  /*
    Esse use Effect é usado para executar alguma coisa assim que
        o componente é carregado na página
  */

  /*
       Pela função getPersonList, passando a função
       setDate que é useState (Uma variável), daí dentro da função
     */

  useEffect(() => {
    getPersonList(setDate);
  }, []);

  return (
    <>
      <Header />
      <FlatList
        data={date}
        renderItem={({ item }) => (
          <ItemFlatList
            item={item}
            desativadoPresente={desativadoPresente}
            desativadoFaltou={desativadoFaltou}
            onPressPresente={() => {
              setDesativadoFaltou(false);
              setDesativadoPresente(true);
            }}
            onPressFaltou={() => {
              setDesativadoPresente(false);
              setDesativadoFaltou(true);
            }}
          />
        )}
      />
    </>
  );
}
