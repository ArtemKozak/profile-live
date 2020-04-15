import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
    ButtonsBarContainer,
    OrLineContainer,
    SignInContainer,
    SignInTitle,
    SingInAsContainer
} from './sign-in.styles';

import {
    // emailSignInStart,
    signInWithGoogle,
    // facebookSignInStart
} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <SignInContainer>
                <SignInTitle>Вход</SignInTitle>
                <span>Войти в аккаунт используя почту и пароль</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Эл. почта'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Пароль'
                        required
                    />
                    <CustomButton type='submit'> Войти </CustomButton>
                </form>
                <OrLineContainer>
                    <hr/>
                    <span>Или</span>
                    <hr/>
                </OrLineContainer>
                <SingInAsContainer>
                    <span>Войти как пользователь</span>
                </SingInAsContainer>
                <ButtonsBarContainer>
                    <CustomButton
                        type='button'
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        Google
                    </CustomButton>
                </ButtonsBarContainer>
            </SignInContainer>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
    // googleSignInStart: () => dispatch(googleSignInStart()),
    // facebookSignInStart: () => dispatch(facebookSignInStart()),
    // emailSignInStart: (email, password) =>
    //     dispatch(emailSignInStart({email, password}))
// });

export default SignIn;
