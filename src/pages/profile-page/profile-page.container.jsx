import React from "react";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {connect} from "react-redux";

import ProfilePage from "./profile-page.component";
import {ProfileDataContainer} from "./profile-page.styles";

const ProfilePageWithSpinner = WithSpinner(ProfilePage);

const ProfilePageContainer = ({users}) => (
    <ProfileDataContainer>
        <ProfilePageWithSpinner isLoading={!users} users={users}/>
    </ProfileDataContainer>
);

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(mapStateToProps)(ProfilePageContainer);