import React from "react";

import {SignInContainerBlock, SignInSignUpContainer} from "./sign-in-sign-up.styles";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInSignUp = () => (
    <SignInSignUpContainer>
        <SignInContainerBlock>
            <SignIn/>
        </SignInContainerBlock>
        <SignInContainerBlock>
            <SignUp/>
        </SignInContainerBlock>
    </SignInSignUpContainer>
);

export default SignInSignUp;