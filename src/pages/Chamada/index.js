import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { AuthContext } from '~/contexts/auth';

import Header from '../../components/Header';
import ChamadaItem from '../../components/ChamadaItem';

export default function Chamada() {
  const { getPersonList } = useContext(AuthContext);
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
        renderItem={({ item }) => <ChamadaItem item={item} />}
      />
    </>
  );
}
