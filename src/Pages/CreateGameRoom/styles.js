import styled from "styled-components";

export const Container = styled.View`
        align-items:center;
         /* justify-content: space-evenly; */
         background:#fff;
         flex:1;
   
       `;
export const LabelInput = styled.TextInput`
         width: 90%;
         height: 09%;
         border: solid 3px #e91e63;
         border-radius: 50px;
         text-align: center;
        font-size:20;
        margin:10px;
       `;

export const TextTitle = styled.Text`
         font-size: 30;
         color: #000051;
         margin: 8%;
         text-align: center;
         margin:20px;
       `;
export const TextButton = styled.Text`
         font-size: 17;
         color: #000051;
         justify-content: center;
         align-items: center;
       `;
export const SaveButton = styled.TouchableOpacity`
         background: #e91e63;
         width: 50%;
         height: 7%;
         border: solid 1px #e91e63;
         border-radius: 30px;
         align-items: center;
         justify-content: center;
         margin:20px;
       `;