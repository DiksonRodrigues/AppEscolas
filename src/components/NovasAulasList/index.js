import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from 'react-native-easy-grid';
import YoutubePlayer from 'react-native-youtube-iframe';

import {
  Container,
  Tipo,
  IconView,
  TipoText,
  AulaText,
  Imagem,
} from './styles';
import { Nome } from '~/pages/Home/styles';

export default function NovasAulasList({ data }) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  return (
    <Container>
      <Tipo>
        <IconView>
          <Icon name="film" color="#000" size={20} />
          <TipoText>{data.tipo}</TipoText>
          {!data.url && (
            <>
              <Imagem
                source={require('../../assets/video.png')}
                style={{ width: 370, height: 260 }}
                resizeMode="contain"
              />
              <View
                style={{ justifyContent: 'flex-start', alignItems: 'center' }}
              >
                <AulaText>{data.valor}</AulaText>
                <Nome>Aulas Antigas</Nome>
              </View>
            </>
          )}

          {data.url && (
            <View
              style={{
                flex: 1,
                width: 400,
                height: 300,
              }}
            >
              <YoutubePlayer
                ref={playerRef}
                height={300}
                width={370}
                videoId="2zie2R1IWQ4"
                play={playing}
                onChangeState={(event) => console.log(event)}
                onReady={() => console.log('ready')}
                onError={(e) => console.log(e)}
                onPlaybackQualityChange={(q) => console.log(q)}
                volume={50}
                playbackRate={1}
                playerParams={{
                  cc_lang_pref: 'us',
                  showClosedCaptions: true,
                }}
              />
              <View
                style={{ justifyContent: 'flex-start', alignItems: 'center' }}
              >
                <AulaText>{data.valor}</AulaText>
                <Nome>Aulas Antigas</Nome>
              </View>
            </View>
          )}
        </IconView>
      </Tipo>
    </Container>
  );
}
