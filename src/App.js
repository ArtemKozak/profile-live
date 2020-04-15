import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import './App.scss';

import Home from "./pages/home/home.component";
import Profile from "./pages/profile/profile.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";

import {setCurrentUser} from "./redux/user/user.actions";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            setCurrentUser(userAuth);
        });
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className={"App"}>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/sign-in'
                           render={() => this.props.currentUser ? (<Redirect to='/profile'/>) : (<SignInSignUp/>)}/>
                </Switch>
            </div>
        );
    };
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
