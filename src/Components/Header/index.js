//@flow
import React from 'react';
import image from '../../../assets/README.png';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLeftSide,
  HeaderRightSide,
  AddGameButton,
  AddGameButtonIcon,
  ImagePng,
} from './styles';

type Props = {
  name: String,
};
function Header({
  title,
  title2,
  title3,
}:Props) {

  return (
    <ImagePng source={image}>
      <HeaderContainer>
        <HeaderLeftSide>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderTitle>{title2}</HeaderTitle>
          <HeaderTitle>{title3}</HeaderTitle>
        </HeaderLeftSide>

        <HeaderRightSide>
          <AddGameButton>
            <AddGameButtonIcon>+</AddGameButtonIcon>
          </AddGameButton>
        </HeaderRightSide>
      </HeaderContainer>
    </ImagePng>
  );
}

export default Header;