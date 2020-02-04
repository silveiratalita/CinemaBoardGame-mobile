//@flow
import React, { useEffect } from 'react';
import image from '../../../assets/CINEMA.jpg';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLeftSide,
  HeaderRightSide,
  AddGameButton,
  AddGameButtonIcon,
  ImagePng,
  Label,
} from './styles';

type Props = {
  name: String,
  isToShowHeaderComplete: Boolean;
};
function Header({ title, title2, title3, isToShowHeaderComplete }: Props) {
  


  return (
    <ImagePng source={image}>
      <HeaderContainer>
        {/* <HeaderLeftSide>
          <Label>
            <HeaderTitle>{title}</HeaderTitle>
          </Label>

          <Label>
            <HeaderTitle>{title2}</HeaderTitle>
          </Label>

          <Label>
            <HeaderTitle>{title3}</HeaderTitle>
          </Label>
        </HeaderLeftSide>

        <HeaderRightSide>
          <AddGameButton isToShowHeaderComplete={isToShowHeaderComplete}>
            <AddGameButtonIcon>+</AddGameButtonIcon>
          </AddGameButton>
        </HeaderRightSide> */}
      </HeaderContainer>
    </ImagePng>
  );
}

export default Header;