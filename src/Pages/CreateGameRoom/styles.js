import styled from "styled-components";

export const Container = styled.View`
        align-items:center;
         justify-content: space-evenly;
         background:#9856;
         flex:1;
   
       `;
export const LabelInput = styled.TextInput`
width:90%;
height:09%;
border:solid 3px #895;
border-radius:50px;
text-align:center;
/* margin:4.3%; */

`;

export const TextTitle = styled.Text`
         font-size: 30;
         color: #000;
         margin: 8%;
     text-align:center;
       `;
export const TextButton = styled.Text`
         font-size: 17;
         color: #000;
        justify-content:center;
        align-items:center;
        
       `;
export const SaveButton = styled.TouchableOpacity`
         background: #895;
         width: 50%;
         height: 7%;
         border: solid 1px #000;
         border-radius: 30px;
         align-items: center;
         justify-content: center;
       `;