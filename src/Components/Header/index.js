//@flow
import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLeftSide,
  HeaderRightSide,
  AddGameButton,
  AddGameButtonIcon,
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
    );
}

export default Header;