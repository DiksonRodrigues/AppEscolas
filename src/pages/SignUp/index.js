/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState, useContext } from 'react';
import {
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { Picker } from '@react-native-community/picker';
import Background from '../../components/Background';

import { AuthContext } from '~/contexts/auth';

import { escolherImagem } from '~/components/Avatar';

import {
  Container,
  ContainerAvatar,
  ContainerImage,
  AvatarText,
  AvatarImage,
  AreaInput,
  Input,
  SubmitButtom,
  SubmitText,
  CustomPickerArea,
  CustomPicker,
} from './styles';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [serie, setSerie] = useState('');
  const [turno, setTurno] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [avatar, setAvatar] = useState(null);

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    if (serie == null) {
      alert('Falta Selecionar a série');
    } else {
      signUp(email, senha, nome, nomeMae, serie, turno, avatar); // Passei o avatar por aqui
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <ScrollView>
          <Container behaviar={Platform.OS === 'ios' ? 'padding' : ''} enabled>
            <ContainerAvatar>
              <ContainerImage onPress={() => escolherImagem(setAvatar)}>
                {avatar === null ? (
                  /* <AvatarText>Foto do Perfil</AvatarText> */

                  <Icon name="user" color="#fff" size={100} />
                ) : (
                  <AvatarImage
                    resizeMode="contain"
                    source={{ uri: `${avatar}` }}
                  />
                )}
                <AvatarText>Clique para Alterar a Foto do perfil</AvatarText>
              </ContainerImage>
            </ContainerAvatar>

            <AreaInput>
              <Input
                placeholder="Nome Completo"
                autCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={setNome}
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Nome da Mãe"
                autCorrect={false}
                autoCapitalize="none"
                value={nomeMae}
                onChangeText={setNomeMae}
              />
            </AreaInput>

            <AreaInput>
              <CustomPickerArea>
                <CustomPicker
                  selectedValue={serie}
                  onValueChange={(itemValue) => setSerie(itemValue)}
                >
                  <Picker.Item label="Escolha sua série e turma" value={null} />
                  <Picker.Item label="7ª série turma A" value="7A" />
                </CustomPicker>
              </CustomPickerArea>
            </AreaInput>

            <AreaInput>
              <CustomPickerArea>
                <CustomPicker
                  selectedValue={turno}
                  onValueChange={(itemValue) => setTurno(itemValue)}
                >
                  <Picker.Item label="Manhã" value="Manhã" />
                  <Picker.Item label="Tarde" value="Tarde" />
                  <Picker.Item label="Noite" value="Noite" />
                </CustomPicker>
              </CustomPickerArea>
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="E-mail"
                autCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Senha"
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
