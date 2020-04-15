import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import './App.scss';

import Home from "./pages/home/home.component";
import Profile from "./pages/profile/profile.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";

import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            CurrentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({CurrentUser: user});

            console.log(user);
        });
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className={"App"}>
                <Header currentUser={this.state.CurrentUser}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile'  component={Profile}/>
                    {this.state.CurrentUser ? (<Redirect to='/profile'/>) : (<Route exact path='/sign-in' component={SignInSignUp}/>)}
                </Switch>
            </div>
        );
    };
}

export default App;
