import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { AuthContext } from '~/contexts/auth';

import Header from '../../components/Header';
import { Container } from './styles';

export default function Chamada() {
  const { getPersonList } = useContext(AuthContext);
  const [date, setDate] = useState({});
  useEffect(() => {
    getPersonList().then((data) => setDate(data));
  });

  return (
    <>
      <Header />
      <Container>
        <FlatList data={date} />
      </Container>
    </>
  );
}
