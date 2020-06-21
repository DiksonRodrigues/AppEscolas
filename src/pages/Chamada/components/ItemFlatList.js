// eslint-disable react/prop-types
import React, { useState } from 'react';
import styled from 'styled-components';

const ItemFlatList = ({
  item,
  desativadoPresente,
  desativadoFaltou,
  onPressPresente,
  onPressFaltou,
}) => {
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

      <ContainerButton>
        <PresenteButton
          underlayColor="#00C800"
          disabled={desativadoPresente}
          onPress={onPressPresente}
        >
          <Texto>Presente</Texto>
        </PresenteButton>
        <FaltouButton
          underlayColor="#d32626"
          disabled={desativadoFaltou}
          onPress={onPressFaltou}
        >
          <Texto>Faltou</Texto>
        </FaltouButton>
      </ContainerButton>
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

const PresenteButton = styled.TouchableHighlight`
  padding: 15px;
  border-radius: 40px;
  margin: 20px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => (props.disabled ? '#ddd' : '#0f0')};
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

const ContainerButton = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: row;
`;

const FaltouButton = styled.TouchableHighlight`
  padding: 10px 25px 10px 25px;
  border-radius: 40px;
  margin: 20px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => (props.disabled ? '#ddd' : '#f00')};
  justify-content: center;
  align-items: center;
`;

export default ItemFlatList;
