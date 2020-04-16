import React from "react";
import ProfileContainerPage from "../../components/profile/profile.container";

import {
    ProfileContainer
} from "./profile-page.styles";


const ProfilePage = ({users}) => (
    <ProfileContainer>
        {
            Object.keys(users).map(key => users[key]).map((user) => (
            <ProfileContainerPage key={user.uid} users={user}/>
        ))}
    </ProfileContainer>
);

export default ProfilePage;