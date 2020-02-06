import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
flex:1;
`;
export const PlayerTimeView = styled.View`
width:100%;
`;
export const PlayerTime = styled.View`
  border: solid 1px #d8d8d8;
  border-radius: 14px;
  width: ${wp('20%')};
  height: ${wp('20%')};
  margin:  4px;
  align-items:center;
  justify-content:center;
`;

export const PlayerTimeNameText = styled.Text`
font-size:20;
color:#000;
`;

export const CardQuestion = styled.View`
border: solid 1px #d8d8d8;
border-radius:14px;
flex:1;
align-items:center;
margin:3%;
padding:3%;
`
export const Question = styled.Text`
 color:#000;
 font-size:30;
`;
export const CardAnswerMovie = styled.View`
  border: solid 1px #d8d8d8;
  border-radius: 14px;
  /* flex: 1; */
  align-items: center;
  margin: 3%;
  padding: 3%;
`;
export const MultipleChoiceOption = styled.TouchableOpacity`
  border: solid 1px #d8d8d8;
  border-radius: 14px;
  flex: 1;
  align-items: center;
  margin: 3%;
  padding: 3%;
`;
export const MultipleChoiceOptionText = styled.Text`
         color: #000;
         font-size: 30;
       `;

