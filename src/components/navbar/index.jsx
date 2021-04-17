import React from 'react';
import styled from 'styled-components';
import {Logo} from '../logo';
import {Button} from '../button/index'

const NavbarContainer=styled.div`
width:100%;
height:20px;
padding:0 1em;
display:flex;
align-items:center;
justify-content:space-between;
z-index: 1;
`;
const BrandContainer=styled.div`

`;
const AccessibilityContainer=styled.div`

`;

export function Navbar(props){
    return(
        <NavbarContainer>
            <BrandContainer>
            <Logo inline/>
            </BrandContainer>
            <AccessibilityContainer>
                <Button size={5}>About</Button>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}
