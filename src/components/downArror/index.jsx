import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../theme'

const ArrowContainer=styled.div`
width:20px;
height:20px;
border-radius:40%;
background-color:rgba(113,113,113,0.48);
display:flex;
justify-content:center;
align-items:center;
border:1x solid transparent;
transition :all 220ms ease-in-out;
cursor:pointer;
z-index: 1;
&:hover{
    border:2px solid ${theme.primary};
}
`;

const ArrowIcon=styled.div`
margin-top:3px;
color:#fff;
font-size:10px;
z-index: 1;
`
export function DownArrow(){
    return<ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown}/>
        </ArrowIcon>
    </ArrowContainer>

}
