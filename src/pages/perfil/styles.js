import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  align-items: center;
`;

export const Nome = styled.Text`
  /*text-align: center;*/
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #000;
`;

export const Newlink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #facc2e;
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
  width: 90%;
  height: 45px;
  border-radius: 10px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;
