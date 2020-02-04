import styled from "styled-components";

export const Container = styled.SafeAreaView`
         flex: 1;
         justify-content: space-between;
         background: #fafafa;
         align-items:flex-start;
       `;
export const CreateNewGameButton = styled.TouchableOpacity`
         width: 35%;
         height: 5%;
         background: #f8534a;
         border-radius: 50px;
         position: absolute;
         bottom: 3%;
         right: 3%;
         justify-content: center;
         align-items: center;
         border: solid 2px #eb7e78;
       `;
       export const CreateNewGameText = styled.Text`
         font-size:20;
         color:#fff;
       align-self:center;
       `;
export const PlayerName = styled.Text`
         color: #000051;
         font-size: 35;
         margin-left: 3%;
         text-align: center;
         margin-bottom: 5%;
         margin-top:5%;
       `;
export const GameList = styled.Text`
color: #000051;
 font-size: 25;
  margin-left: 3%;
  margin-bottom:5%;
    `;
export const GamesView = styled.View`
         background: #fff;
         padding: 10px;
         border: solid 3px #e6e6e6;
         border-radius: 16px;
         margin: 0 4px 0 4px;
         width:98%;
       `;
       export const GamesItenView = styled.View`
         background: #fff;
         padding: 10px;
       `;
export const GamesViewText = styled.Text`
color:#000;
font-size:16;
margin:2px;
`;

export const FlatListItens = styled.FlatList``;
export const Separator = styled.View`
         width: 90%;
         background: #e6e6e6;
         height: 2px;
         align-self: center;
       `;