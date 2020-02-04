import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from "styled-components";

export const HeaderContainer = styled.View`
  height: 100%;
  width: 100%;
  background: transparent;
  align-content:flex-start;
  justify-content:space-between;
  text-align:center;
  margin-bottom:10px;
  flex-direction:row;

`;
export const Label = styled.View`
width:100%;
height:10%;
border-radius:50px;
background:#ff6090;
margin:5px;
text-align:center;
`;
export const HeaderLeftSide = styled.View`
         height:${({isToShowHeaderComplete}) =>
             isToShowHeaderComplete === false ? '0' : '100%'};
         width: 50%;
         align-content: center;
         justify-content: center;
         text-align: center;
         margin-bottom: 10px;
       `;
export const ImagePng = styled.ImageBackground`
         width: 100%;
         height: 20%;
         margin-top: 7%;
         margin-top: 0;
       `;

export const HeaderRightSide = styled.View`
         height:100%;
         width: 50%;
         align-content: flex-end;
         justify-content: space-between;
         text-align: center;
         margin-bottom: 10px;
       `;
export const AddGameButton = styled.TouchableOpacity`
         height: 80px;
         width: 80px;
         background: ${({isToShowHeaderComplete}) =>
           isToShowHeaderComplete === false ? 'transparent' : '#ff6090'};
         ;
         border-radius: 50px;
         /* border: solid 1px #ff6090; */
         margin-top: 150px;
         margin-left: 102px;
       `;
export const AddGameButtonIcon = styled.Text`
font-size:80;
position:absolute;
top:-16%;
left:20%;
color:#000051;
  `;
export const HeaderTitle = styled.Text`
         color: #000051;
         font-size: 23;
         margin-top: 10px;
         text-align: center;
       `;