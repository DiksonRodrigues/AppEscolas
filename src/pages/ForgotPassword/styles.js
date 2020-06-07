import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  background-color: #ffef52;
`;

export const Input = styled.TextInput`
  border: 5px solid #ffbe4a;
  opacity: 0.5;
  font-size: 20px;
  background-color: #ffbe4a;
  border-radius: 20px;
  padding-left: 15px;
  margin: 20px;
`;

export const Button = styled.TouchableHighlight`
  background-color: #18a61b;
  padding: 15px;
  margin: 0 20px 20px 20px;
  border-radius: 40px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #f2f2f2;
`;
