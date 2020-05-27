import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';


import { AuthContext } from '../../contexts/auth';

import {Container, Nome, Newlink, NewText, Logout, LogoutText} from './styles';


export default function Perfil() {
 const navigation = useNavigation();

 const { user, signOut } = useContext(AuthContext);


 return (
   <Container>
     <Header/>
     <Nome>
       {user && user.nome}
     </Nome>
     <Newlink onPress={ () => navigation.navigate('Registrar') } >
       <NewText> Registrar </NewText>
     </Newlink>

      <Logout onPress={ () => signOut() } >
        <LogoutText>Sair</LogoutText>
      </Logout>
   </Container>
  );
}