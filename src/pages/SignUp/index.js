import React, {useState, useContext}from 'react';
import { View, Text, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Background from '../../components/Background';

import { AuthContext } from '../../contexts/auth';

import {escolherImagem} from '../../components/Avatar'

import {Container, ContainerAvatar, ContainerImage, AvatarText, AvatarImage, AreaInput, Input,
SubmitButtom, SubmitText } from '../SignUp/styles';

export default function SignUp() {
  const [nome, setNome ] = useState('');
  const [nomemae, setNomemae ] = useState('');
  const [serie, setSerie ] = useState('');
  const [turno, setTurno ] = useState('');
  const [email, setEmail ] = useState('');
  const [senha, setSenha ] = useState(''); 
  const [avatar, setAvatar] = useState(null);
   

  const { signUp } = useContext(AuthContext)

  function handleSignUp(){
    signUp(email, senha, nome);
 }

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
   
     <Background>
   <ScrollView>
    <Container
    behaviar={Platform.OS === 'ios' ? 'padding' : '' }
    enabled
     > 

        <ContainerAvatar>
                
          <ContainerImage onPress={() => escolherImagem(setAvatar)}>
               {avatar === null ? (
                /*<AvatarText>Foto do Perfil</AvatarText>*/

               <Icon 
                name= "user" 
                color= '#fff' 
                size={100}
               />  
              ) : (
                <AvatarImage resizeMode="contain" source={{ uri: `${avatar}` }} />
              )}
                 <AvatarText>
                  Clique para Alterar a Foto do perfil 
                </AvatarText>
              
          </ContainerImage>
        </ContainerAvatar>
          

        <AreaInput>
          <Input
          placeholder='Nome Completo'
          autCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={setNome}
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder='Nome da Mãe'
          autCorrect={false}
          autoCapitalize="none"
          value={nomemae}
          onChangeText={setNomemae}
          />
        </AreaInput>
        
        <AreaInput>
          <Input
          placeholder='Série e Turma'
          autCorrect={false}
          autoCapitalize="none"
          value={serie}
          onChangeText={setSerie}
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder='Turno: Manhã, Tarde ou Noite'
          autCorrect={false}
          autoCapitalize="none"
          value={turno}
          onChangeText={setTurno}
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder='E-mail'
          autCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          />
        </AreaInput>
        
        <AreaInput>
          <Input
          placeholder='Senha'
          autCorrect={false}
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          />
        </AreaInput>
      
           <SubmitButtom onPress={handleSignUp}>
              <SubmitText>Cadastrar</SubmitText>
          </SubmitButtom>
      </Container>
     </ScrollView>
    </Background> 
  </TouchableWithoutFeedback>

  );
}