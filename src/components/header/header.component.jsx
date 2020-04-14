import React from "react";
import {HeaderBlock, LinkContainer, HeaderLink} from "./header.styles";

const Header = () => (
    <HeaderBlock>
        <LinkContainer>
            <HeaderLink to='/'>ДОМОЙ</HeaderLink>
            <HeaderLink to='/profile'>ПРОФИЛЬ</HeaderLink>
            <HeaderLink to='/sign-in'>ВОЙТИ</HeaderLink>
        </LinkContainer>
    </HeaderBlock>
);

export default Header;