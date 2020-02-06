import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f2f2f2;
`;

export const RoomName = styled.Text`
  font-size: 20;
`;
export const RoomLink = styled.Text`
  font-size: 20;
`;
export const ShareTouchable = styled.TouchableOpacity`
  height: 30%;
  width: 33%;
  margin: 3%;
`;
export const ShareImage = styled.Image`
  height: 30px;
  width: 30px;
  margin: 50%;
`;
export const LeftSide = styled.View`
  justify-content: space-between;
  height: 30%;
  margin: 2%;
`;

export const RightSide = styled.View`
  width: 25%;
  align-items: center;
  height: 50%;
`;
export const TopContainer = styled.View`
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
`;
export const PlayerList = styled.View`
  border: solid 2px #d8d8d8;
  border-radius: 16px;
  width: 100%;
  padding: 3%;
  align-content:flex-start;
`;
export const PlayerListText = styled.Text`
  font-size: 18;
  margin:2%;
`;
export const PlayersInside = styled.View`
  border: solid 2px #d8d8d8;
  border-radius: 16px;
  flex: 1;
  margin: 0 2% 0 2%;
  padding: 1% 2% 0 2%;
`;

export const EstimatedTimeAndNumberOfRounds = styled.View`
  border: solid 2px #d8d8d8;
  border-radius: 16px;
  margin: 3% 2% 2% 2%;
  padding: 1% 2% 0 2%;
  background: #fe2e2e;
  flex-direction: row;
  justify-content: space-between;
`;
export const EstimatedTimeAndNumberOfRoundsText = styled.Text`
  color: #fff;
  font-size: 16;
  margin: 2%;
`;
export const ViewToStyle = styled.View``;
export const ImageDanger = styled.Image`
  height: 55px;
  width: 55px;
  margin-top: 2%;
`;
export const ImageDangerView = styled.View`
  height: 100%;
  width: 30%;
  background: #d8d8d8;
`;
export const StartGameButton = styled.TouchableOpacity`
  width: 60%;
  height: 10%;
  margin-top: 2%;
  align-self: center;
  border-radius: 50px;
  background: #fe2e2e;
  justify-content: center;
`;

export const StartGameButtonText = styled.Text`
  font-size: 30;
  color: #fff;
  text-align: center;
`;
export const ItemViewSeparator = styled.View`
  background: #d8d8d8;
  width: 90%;
  height: 2px;
  align-self:center;
`;
