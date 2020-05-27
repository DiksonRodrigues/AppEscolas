import React, {useState, useContext}from 'react';
import { View, Text, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Background from '../../components/Background'

import { Container, Logo, AreaInput, Input,
SubmitButtom, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail ] = useState('');
  const [senha, setSenha ] = useState('');
  
  const { signIn } = useContext(AuthContext)

  function handleSignIn(){
     signIn(email, senha)  
  }

 return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
   <Background>
     <Container
     behaviar={Platform.OS === 'ios' ? 'padding' : '' }
     enabled
     >
       <Logo source={require('../../assets/escola2.png')}/>

       <AreaInput>
        <Input
          placeholder='E-mail'
          autCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor='#000'
        />
       </AreaInput>
       
       <AreaInput>
        <Input
          placeholder='Senha'
          autCorrect={false}
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor='#000'
        />
       </AreaInput>
     
       <SubmitButtom onPress={handleSignIn}>
         <SubmitText>Acessar</SubmitText>
       </SubmitButtom>

       

       <Link onPress={() => navigation.navigate('SignUp')}>
         <LinkText>Não tem conta ainda ? Registre-se</LinkText>
       </Link>

     </Container>
   </Background>
   </TouchableWithoutFeedback>
  );
}