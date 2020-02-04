import styled from 'styled-components';

export const Container = styled.SafeAreaView`
         flex: 1;
         /* justify-content: space-between; */
         background: #fafafa;
       `;
export const LoginBodyView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top:20%;
`;
export const TextLogin = styled.Text`
  font-size: 20;
  color: #bdbdbd;
`;
export const CreateAcountOrEnter = styled.TouchableOpacity`
         background: ${({enter}) => (enter ? '#BDBDBD' : 'transparent')};
         align-content: center;
         justify-content: center;
         border: solid 3px #d8d8d8;
         border-radius: 50px;
         width: 30%;
         align-self: center;
         margin-bottom: 35;
       `;
export const CreateAcountOrEnterText = styled.Text`
         font-size: 20;
         align-self: center;
         margin: 2px;
       
       `;
export const ImagePng = styled.Image`
  width: 100%;
  height: 40%;
`;
