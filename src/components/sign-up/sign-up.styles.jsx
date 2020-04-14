import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SubDescriptionContainer = styled.h2`
  margin: 10px 0 20px 5px;
  font-size: 10px;
`;

export const TermsLink = styled(Link)`
  color: #497DDD;
  cursor: pointer;
`;
