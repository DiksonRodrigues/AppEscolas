import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Tipo,
  IconView,
  TipoText,
  AulaText,
  Imagem,
  ViewImage,
} from './styles';

export default function NovasAulasList({ data }) {
  const [urlVideo, setUrlVideo] = useState('');
  return (
    <Container>
      <Tipo>
        <IconView>
          <Icon name="film" color="#000" size={20} />
          <TipoText>{data.tipo}</TipoText>

          <Imagem
            source={require('../../assets/video.png')}
            style={{ width: 370, height: 260 }}
            resizeMode="contain"
          />
        </IconView>
        <AulaText>{data.valor}</AulaText>
      </Tipo>
    </Container>
  );
}
