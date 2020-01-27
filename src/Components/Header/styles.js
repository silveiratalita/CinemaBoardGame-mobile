import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from "styled-components";

export const HeaderContainer = styled.View`
  height: 30%;
  width: 100%;
  background: #2894f7;
  align-content:center;
  justify-content:space-between;
  text-align:center;
  margin-bottom:10px;
  flex-direction:row;
  
`;
export const HeaderLeftSide = styled.View`
  height: 100%;
  width: 50%;
  /* background: #7956c1; */
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const HeaderRightSide = styled.View`
  height: 100%;
  width: 50%;
  /* background: #7956c1; */
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;
export const AddGameButton = styled.TouchableOpacity`
         height: 30%;
         width: 40%;
         background: #fff;
         border-radius:50;
         border:solid 1px #000;
         margin-top:150px;
         margin-left:102px;
       `;
export const AddGameButtonIcon = styled.Text`
font-size:80;
position:absolute;
top:-16%;
left:20%;

  `;
export const HeaderTitle = styled.Text`
         color: #000;
         font-size: 23;
         margin-top:10px;
       `;