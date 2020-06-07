import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ContainerAvatar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #facc2e;
`;
// background-color: #f00;
export const AvatarImage = styled.Image`
  position: absolute;
  bottom: -55px;
  border-radius: 60px;
  width: 120px;
  height: 120px;
`;

export const ContainerUserContent = styled.View`
  flex: 1;
  position: absolute;
  left: 30px;
`;

export const ContainerConteudo = styled.View`
  flex: 4;
  margin-top: 70px;
  align-items: center;
`;

export const UserNameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Nome = styled.Text``;

export const HeaderContainer = styled.View`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  border: 3px solid #ffef52;
  padding-left: 20px;
  padding-right: 20px;
  background: #f0f0f0;
  width: 90%;
  font-size: 20px;
  color: #000;
  margin-bottom: 8px;
  border-radius: 20px;
`;
