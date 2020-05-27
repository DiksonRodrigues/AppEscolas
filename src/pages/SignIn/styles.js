import styled from 'styled-components/native';


// export const Background = styled.View`
// flex:1;
// background-color: #FACC2E;
// `;
export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content:center;
`;
export const Logo = styled.Image`
margin-bottom: 15px;
height: 43%;
width: 90%;
`;
export const AreaInput = styled.View`
flex-direction: row;
`;
export const Input = styled.TextInput`
opacity: 0.5;
background: #f0f0f0;
width: 90%;
font-size: 18px;
color: #000;
margin-bottom: 8px;
padding: 8px;
border-radius: 7px;
`;

export const SubmitButtom  = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #18a61b;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText  = styled.Text`
font-weight: bold;
font-size: 18px;
color: #f0f0f0;
`;

export const Link  = styled.TouchableOpacity`
margin-top: 5px;
margin-bottom:9px;
`;

export const LinkText  = styled.Text`
color: #424242;
margin-top: 5px;
font-size: 16px;
`;


