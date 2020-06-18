import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

/* export const Background = styled.View`
 flex:1;
 align-items: flex-end;
 background-color: #f0f0f0;
 align-items: center;
 `; */

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerAvatar = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding: 10px 15px 15px 15px;
`;

export const ContainerImage = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const AvatarText = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const AvatarImage = styled.Image`
  width: 170px;
  height: 170px;
  border-radius: 170px;
`;

export const AreaInput = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AreaInputSwitch = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  opacity: 0.5;
  background: #f0f0f0;
  width: 90%;
  font-size: 18px;
  color: #000;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 15px;
`;

export const SubmitButtom = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #18a61b;
  width: 90%;
  height: 45px;
  border-radius: 7px;
`;

export const SubmitText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #f0f0f0;
`;

export const CustomPickerArea = styled.View`
  justify-content: center;
  width: 90%;
  border-radius: 20px;
  margin-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const CustomPicker = styled(Picker)`
  color: rgba(0, 0, 0, 0.8);
  margin-left: 5px;
  font-weight: bold;
`;
