import React from 'react'
import styled from "styled-components";
import {theme} from "../../theme"
const Buttonwrapper=styled.button`
padding:5px 10px;
border-radius:5px;
font-weight: bold;
font-size: ${({size})=>(size ? size+"px":"16px")};
outline: none;
border:2px solid transparent;
transition :all 220ms ease-in-out;
cursor:pointer;
z-index: 1;

&:hover {
    backgound-color:transparent;
    border:2px solid ${theme.primary};
}
`;

export function Button(props){
    return <Buttonwrapper {...props}>{props.children}</Buttonwrapper>
}