import styled from 'styled-components/native';
import { Row } from 'react-native-easy-grid';

export const Container = styled.View`
  margin-bottom: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.02);
`;

export const Tipo = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const RowCustom = styled(Row)`
  border: 1px solid rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

export const LinkParaMaisAulas = styled.TouchableOpacity``;
export const TextoParaMaisAulas = styled.Text``;

export const IconView = styled.View`
  flex-direction: column;
`;

export const TipoText = styled.Text`
  font-size: 16px;
  font-style: italic;
`;

export const AulaText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Imagem = styled.Image`
  margin: 0;
  border-radius: 7px;
`;
