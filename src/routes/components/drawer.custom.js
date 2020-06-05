/* eslint-disable react/no-unused-state, react/destructuring-assignment, react/forbid-prop-types, react/require-default-props */
import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native/dist/styled-components.native.esm';
import { AuthContext } from '~/contexts/auth';

// eslint-disable-next-line react/prop-types
export default ({ navigation: { navigate, dispatch } }) => {
  const navigateToScreen = (route) => {
    navigate(route);
    dispatch(DrawerActions.closeDrawer());
  };
  const {
    user: { avatar, nome, serie },
  } = useContext(AuthContext);

  let firstName;

  if (nome.split(' ').length > 1) {
    firstName = nome.split(' ').slice(0, -1).join(' ');
  } else {
    firstName = nome;
  }

  return (
    <>
      <HeaderInternDrawerContainer>
        <HeaderInternDrawerButtonMenu
          onPress={() => dispatch(DrawerActions.closeDrawer())}
        >
          <Icon name="menu" color="#000" size={30} />
        </HeaderInternDrawerButtonMenu>
      </HeaderInternDrawerContainer>
      <Container>
        <ScrollView>
          <ContainerAvatar>
            <AvatarImage source={{ uri: avatar }} />
            <UserNameText>Nome: {firstName}</UserNameText>
            <UserNameText>Série: {serie}</UserNameText>
          </ContainerAvatar>

          <NavigatorsContainer>
            <NavigatorItem>
              <NavigatorText onPress={() => navigateToScreen('Home')}>
                Novas Aulas
              </NavigatorText>
            </NavigatorItem>
            <NavigatorItem>
              <NavigatorText onPress={() => navigateToScreen('Avisos')}>
                Avisos
              </NavigatorText>
            </NavigatorItem>
            <NavigatorItem>
              <NavigatorText onPress={() => navigateToScreen('Perfil')}>
                Perfil
              </NavigatorText>
            </NavigatorItem>
          </NavigatorsContainer>
        </ScrollView>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContainerAvatar = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const UserNameText = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const HeaderInternDrawerContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 2px;
  width: 100%;
  height: 50px;
`;

const NavigatorsContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
`;

const NavigatorItem = styled.View`
  margin: 10px;
`;

const NavigatorText = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const HeaderInternDrawerButtonMenu = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.Image`
  border-radius: 60px;
  width: 120px;
  height: 120px;
`;
