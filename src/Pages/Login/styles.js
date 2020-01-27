import styled from "styled-components";

export const LoginBodyView = styled.View`
justify-content:center;
align-content:center;
align-items:center;
`;
export const TextLogin = styled.Text`
  font-size: 25;
`;
export const CreateAcountOrEnter = styled.TouchableOpacity`
         background: ${({enter}) => (enter ? '#7559c1' : 'transparent')};
         align-content: center;
         justify-content: center;
       `;
export const CreateAcountOrEnterText = styled.Text`
font-size:20;
align-self:center;
margin:2px;
`;