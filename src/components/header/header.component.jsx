import React from "react";
import {HeaderBlock, LinkContainer, HeaderLink} from "./header.styles";
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <HeaderBlock>
        <LinkContainer>
            <HeaderLink to='/'>ДОМОЙ</HeaderLink>
            <HeaderLink to='/profile'>ПРОФИЛЬ</HeaderLink>
            {
                currentUser ? (
                    <HeaderLink as='div' onClick={() => auth.signOut()}>ВЫЙТИ</HeaderLink>
                ) : (
                    <HeaderLink to='/sign-in'>ВОЙТИ</HeaderLink>
                )
            }
        </LinkContainer>
    </HeaderBlock>
);

export default Header;