import React from "react";
import {
    BackgroundImage,
    HeadContainer,
    InfoContainer,
    ImageContainer,
    NameContainer,
    OtherPropsContainer,
    ProfileBlock
} from "./profile.styles";

const ProfileItem = ({user}) => (
    <ProfileBlock>
        <NameContainer><p>{user.displayName}</p></NameContainer>
        <InfoContainer>
            <HeadContainer>
                <ImageContainer>
                    <BackgroundImage photoURL={user.photoURL}/>
                </ImageContainer>
            </HeadContainer>
            <OtherPropsContainer>
                <p>Эл. почта: {user.email}</p>
                <p>Почта подтвержена: {user.emailVerified ? 'да' : 'нет'}</p>
                <p>Телефон: {user.phoneNumber ? user.phoneNumber : '---'}</p>
                <p>Анонимно: {user.isAnonymous ? 'да' : 'нет'}</p>
                {/*<p>Создано в: {currentUser.createdAt}</p>*/}
                <p>Uid: {user.uid}</p>
            </OtherPropsContainer>
        </InfoContainer>
    </ProfileBlock>
);

export default ProfileItem;