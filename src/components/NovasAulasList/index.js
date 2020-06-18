import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from 'react-native-easy-grid';
import YoutubeVideo from '~/components/Video';

import {
  Container,
  Tipo,
  IconView,
  TipoText,
  AulaText,
  Imagem,
  RowCustom,
  LinkParaMaisAulas,
  TextoParaMaisAulas,
} from './styles';
import { Nome } from '~/pages/Home/styles';

export default function NovasAulasList({ data }) {
  const [linkVideo, setLinkVideo] = useState('');
  const [linkCortado, setLinkcortado] = useState('');

  useEffect(() => {
    if (data.url) {
    }
  });

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
        <Nome>Aulas Antigas</Nome>
      </Tipo>
    </Container>
  );
}
