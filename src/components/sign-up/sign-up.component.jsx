import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpContainer, SignUpTitle, SubDescriptionContainer, TermsLink} from './sign-up.styles';

// import {signUpStart} from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();


        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };


    render() {
        return (
            <SignUpContainer>
                <SignUpTitle>Регистрация</SignUpTitle>
                <span>Присойденитесь используя почту и пароль</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Ваше имя'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Эл. почта'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Придумайте пароль'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Подтвердите пароль'
                        required
                    />
                    <SubDescriptionContainer>Регистрируясь, вы соглашаетесь с
                        <TermsLink to='/terms'> пользовательским соглашением</TermsLink>
                    </SubDescriptionContainer>
                    <CustomButton type='submit'>зарегистрироваться</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;
