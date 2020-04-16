import styled from "styled-components";

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  width: 80%;
  height: 320px;
  padding: 0;
  margin: 0 0 40px 0;
  box-shadow: 0px 6px 20px -1px rgba(0,0,0,0.6);
`;

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0;
  
  p {
    margin-top: 0;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const OtherPropsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: grey;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({photoURL}) => `url(${photoURL})`};
`;