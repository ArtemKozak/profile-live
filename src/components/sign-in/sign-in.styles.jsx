import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const OrLineContainer = styled.div`
  margin: 20px 0 !important;
  width: 100%;
  display: flex;
  flex-direction: line;
  
  hr {
    width: 40%;
    border: none;
    border-bottom: 1px solid grey;
  }
`;


export const SingInAsContainer = styled.div`
  margin: 0 0 18px 10px !important;
  width: 100%;
  display: flex;
  flex-direction: line;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
