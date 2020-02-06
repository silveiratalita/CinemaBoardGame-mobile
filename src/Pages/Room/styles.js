import styled from "styled-components";

export const Container = styled.SafeAreaView`
         flex: 1;
         background: #f2f2f2;
       `;

export const RoomName = styled.Text`
font-size:20;
`;
export const RoomLink = styled.Text`
  font-size: 20;
`;
export const ShareTouchable = styled.TouchableOpacity`
height:30%;
width:33%;
margin:3%;
`;
export const ShareImage = styled.Image`
height:100%;
width:100%;
margin:50%;
   `;
export const LeftSide = styled.View`
justify-content:space-between;
height:30%;
margin:2%;
`;

export const RightSide = styled.View`
width:25%;
align-items:center;
height:50%;

`;
export const TopContainer = styled.View`
height:10%;
flex-direction:row;
justify-content:space-between;

`;
export const PlayerList = styled.View`
         border: solid 2px #d8d8d8;
         border-radius: 16px;
         width: 100%;
         padding: 3%;
       `;
       export const PlayerListText = styled.Text`
       font-size:18;
       `;
export const PlayersInside = styled.View`
         border: solid 2px #d8d8d8;
         border-radius: 16px;
         /* flex: 1; */
         margin: 0 2% 0 2%;
         padding: 1% 2% 0 2%;
       `;

export const EstimatedTimeAndNumberOfRounds = styled.View`
         border: solid 2px #d8d8d8;
         border-radius: 16px;
         /* flex: 1; */
         margin: 3% 2% 0 2%;
         padding: 1% 2% 0 2%;
         background: #fe2e2e;
         flex-direction: row;
         justify-content:space-between;

       `;
       export const EstimatedTimeAndNumberOfRoundsText = styled.Text`
       color:#fff;
       font-size:12;
       margin:3%;
       height:10%;
       width:98%;
       `;
export const ViewToStyle = styled.View`
width:80%;
height:100%;
`;
export const ImageDanger = styled.Image`
height:32%;
width:15%;
/* margin:1%; */
`;
export const ImageDangerView = styled.View`
  height: 100%;
  width: 30%;
  background:#555;

  
`;
export const StartGameButton = styled.TouchableOpacity`
background:#999;
width:15%;
height:10%;
`;