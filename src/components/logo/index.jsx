import React from 'react';
import styled, { css } from 'styled-components';
import BeemaLogo from "../../assets/logo/logo_croped.png";
import {theme} from '../../theme';

const LogoContainer=styled.div`
display:flex;
flex-direction:${({inline})=>(inline?"row":"column")};
align-items:${({inline})=>inline&&"center"};
`;

const LogoImg=styled.img`

width: 4em;
  height: 4em;
  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};
`;
const LogoText=styled.div`
margin-top: ${({ inline }) => (inline ? 0 : "1px")};
 font-size: ${({inline})=>(inline?"4px":"10px")};
 color:${({inline})=>(inline?"#fff":theme.primary)};
 font-weight:700;
`;


export function Logo(props){
    const { inline } = props;
   return <LogoContainer inline={inline}>
       <LogoImg src={BeemaLogo} inline={inline}/>
       <LogoText >Manish Gupta</LogoText>
   </LogoContainer>
}