import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import './App.scss';

import Home from "./pages/home/home.component";
import ProfilePageContainer from "./pages/profile-page/profile-page.container";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";

import {getUserSession, getAllUsers} from "./redux/user/user.actions";

import {auth, createUserProfileDocument, getUsers} from "./firebase/firebase.utils";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {getUserSession, getAllUsers} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                const usersRef = await getUsers();
                getAllUsers({...usersRef});
                userRef.onSnapshot(snapShot => {
                    getUserSession({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
                userRef.onSnapshot(snapShot => {
                    getUserSession({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            getUserSession(userAuth);
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
                    <Route exact path='/profile' component={ProfilePageContainer}/>
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
    getUserSession: user => dispatch(getUserSession(user)),
    getAllUsers: users => dispatch(getAllUsers(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
