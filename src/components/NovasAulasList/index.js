import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PlayerVideo from '~/components/Video';

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
  return (
    <Container>
      <Tipo>
        <IconView>
          <Icon name="film" color="#000" size={20} />
          <TipoText>{data.tipo}</TipoText>
          {data.url && (
            <View style={{ width: 370, height: 260 }}>
              <PlayerVideo />
            </View>
          )}

          {!data.url && (
            <Imagem
              source={require('../../assets/video.png')}
              style={{ width: 370, height: 260 }}
              resizeMode="contain"
            />
          )}
        </IconView>
        <AulaText>{data.valor}</AulaText>
        <Nome>Aulas Antigas</Nome>

        <Grid>
          <Col>
            <RowCustom>
              <Text>Vídeo 1</Text>
            </RowCustom>
            <RowCustom>
              <Text>Vídeo 2</Text>
            </RowCustom>
          </Col>
          <Col>
            <RowCustom>
              <Text>Vídeo3</Text>
            </RowCustom>
            <RowCustom>
              <Text>Video4</Text>
            </RowCustom>
          </Col>
        </Grid>
        <LinkParaMaisAulas>
          <TextoParaMaisAulas>Mais Aulas</TextoParaMaisAulas>
        </LinkParaMaisAulas>
      </Tipo>
    </Container>
  );
}
