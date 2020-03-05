import styled from "styled-components";

export const Container = styled.SafeAreaView`
         align-items: center;
         background: #fafafa;
        justify-content:space-between;
        flex:1;
         
       `;
export const ContainerContent = styled.View`
margin:10%;
border: solid 2px #bdbdbd;
border-radius:50px;
width:90%;
height:30%;
align-items:center;
 justify-content:center;
 padding-top:50px;
 flex:3;
  `;



export const TextTitle = styled.Text`
         font-size: 23;
         color: #000051;
         margin: 8%;
         text-align: center;
         margin:20px;
       `;
export const TextButton = styled.Text`
         font-size: 12;
         color: #000051;
         justify-content: center;
         align-items: center;
         color:#FFF;
       `;
export const SaveButton = styled.TouchableOpacity`
         background: #fe2e2e;
         width: 50%;
         height: 10%;
         border: solid 1px #fe2e2e;
         border-radius: 30px;
         align-items: center;
         justify-content: center;
         margin: 20px;
       `;