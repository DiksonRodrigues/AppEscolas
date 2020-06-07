import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { Picker } from '@react-native-community/picker';
import { AuthContext } from '../../contexts/auth';

import {
  Container,
  HeaderContainer,
  ContainerConteudo,
  AreaInput,
  Input,
  ContainerUserContent,
  Nome,
  Newlink,
  NewText,
  Logout,
  LogoutText,
  ContainerAvatar,
  AvatarImage,
  UserNameText,
} from './styles';
import { CustomPicker, CustomPickerArea } from '~/pages/SignUp/styles';
import { SubmitButtom, SubmitText } from '~/pages/SignIn/styles';

export default function Perfil() {
  const {
    user: { avatar, nome, nomeMae, serie, turno, email },
  } = useContext(AuthContext);

  const [newNome, setNome] = useState(null);
  const [newNomeMae, setNomeMae] = useState(null);
  const [newSerie, setSerie] = useState(null);
  const [newTurno, setTurno] = useState(null);
  const [newEmail, setEmail] = useState(null);
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContainerAvatar>
        <AvatarImage source={{ uri: avatar }} />
      </ContainerAvatar>

      <ContainerConteudo>
        <AreaInput>
          <Input
            placeholder="Nome Completo"
            autCorrect={false}
            autoCapitalize="none"
            value={newNome !== null ? newNome : nome}
            onChangeText={setNome}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholderTextColor="#999"
            placeholder="Nome da Mãe"
            autCorrect={false}
            autoCapitalize="none"
            value={newNomeMae !== null ? newNomeMae : nomeMae}
            onChangeText={setNomeMae}
          />
        </AreaInput>

        <AreaInput>
          <CustomPickerArea>
            <CustomPicker
              selectedValue={newSerie !== null ? newSerie : serie}
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
              selectedValue={newTurno !== null ? newTurno : turno}
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
            value={newEmail !== null ? newEmail : email}
            onChangeText={setEmail}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Nova Senha"
            autCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChangeText={setSenha}
          />
        </AreaInput>

        <SubmitButtom onPress={() => console.log('Hello')}>
          <SubmitText>Editar Usuário</SubmitText>
        </SubmitButtom>
      </ContainerConteudo>
    </Container>
  );
}
