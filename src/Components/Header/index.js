//@flow
import React from 'react';
import {HeaderContainer, HeaderTitle} from './styles';

type Props = {
  name: String,
};
function Header({
    title,
}:Props) {

    return (
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
    );
}

export default Header;