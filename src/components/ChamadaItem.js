/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ChamadaItem = ({ item }) => {
  return (
    <Container>
      <Imagem
        source={{
          uri: item.avatar,
        }}
      />
      <ContainerName>
        <Texto>{item.nome}</Texto>
      </ContainerName>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Imagem = styled.Image`
  width: 100px;
  height: 100px;
`;

const ContainerName = styled.View`
  flex: 1;
  margin: 15px 0 30px 0;
`;

const Texto = styled.Text`
  font-size: 25px;
  color: #393e46;
  font-weight: bold;
`;

export default ChamadaItem;
