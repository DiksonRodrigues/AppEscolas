import React, { useState, useContext } from 'react';
import { Container, Input, Button, ButtonText } from './styles';
import { AuthContext } from '../../contexts/auth';

export default () => {
  const { forgotPassword } = useContext(AuthContext);

  const [email, setEmail] = useState('');

  return (
    <Container>
      <Input
        placeholderTextColor="#000"
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <Button onPress={() => forgotPassword(email)} underlayColor="#e0c286">
        <ButtonText>Recuperar Conta</ButtonText>
      </Button>
    </Container>
  );
};
