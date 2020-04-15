import React from "react";
import {ContainerBlock} from "../../components/container/container.styles";
import {connect} from "react-redux";

const Profile = ({currentUser}) => (
    <ContainerBlock>
        <p>{currentUser.displayName}</p>
    </ContainerBlock>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Profile);