import React from "react";
import WithSpinner from "../with-spinner/with-spinner.component";

import ProfileItem from "./profile.component";
import {ProfileDataContainer} from "./profile.styles";

const ProfileItemWithSpinner = WithSpinner(ProfileItem);

const ProfileContainerPage = ({users}) => (
    <ProfileDataContainer>
        <ProfileItemWithSpinner isLoading={!users} user={users}/>
    </ProfileDataContainer>
);

export default ProfileContainerPage;