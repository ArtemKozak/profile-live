import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderBlock = styled.div`
  
  border-bottom: 1px solid grey;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  box-shadow: 0px 1px 15px -1px rgba(0,0,0,0.3);
`;

export const LinkContainer = styled.div`
  margin: 20px 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const HeaderLink = styled(Link)`
  margin: 0 auto;
  cursor: pointer;
`;