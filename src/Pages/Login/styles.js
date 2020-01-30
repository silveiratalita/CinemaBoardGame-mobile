import styled from "styled-components";

export const Container = styled.View`
  flex:1;
  justify-content:space-evenly;
`;
export const LoginBodyView = styled.View`
justify-content:center;
align-content:center;
align-items:center;
`;
export const TextLogin = styled.Text`
  font-size: 20;
  color:#858;
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
export const ImagePng = styled.Image``;
