import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import { Container, Tipo, IconView, TipoText, AulaText, Imagem} from './styles'

export default function NovasAulasList({ data }) {
 return (
    
   <Container>
     <Tipo>
       <IconView>
           <Icon 
           name= "film" 
           color= '#000' 
           size={20}
           />
           <TipoText>{data.tipo}</TipoText>
           
           <Imagem 
           source={require('../../assets/video.png')}
           style={{width: 250, height: 250, paddingLeft: 30, }} resizeMode="contain"
           />
       </IconView> 
     </Tipo>
     <AulaText>
       {data.valor}
     </AulaText>
     
   </Container>
  
   
  );
}