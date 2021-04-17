import React from 'react'
import {Button} from '../../components/button/index';
import styled from 'styled-components'
import { Logo } from '../logo'
import { Marginer } from '../marginer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
const FooterContainer=styled.div`
width:100%;
height:300px;
display:flex;
flex-direction:column;
align-items:center;
background-color:#1f1f1f;
`
const MotivationalText=styled.h1`
font-size:20px;
align-items:center;
font-weight: medium ;
color:#fff;
margin:0;
`;
const AccessibilityContainer=styled.div`
width:90%;
display:flex;
border-top:1px solid #cdcdcd;
color:#fff;
padding-top:5px;
padding-left:5px;
padding-right:5px;
justify-content:space-between;
`;
const PrivacyContainer=styled.div`
display:flex;
`;

const SocialContainer=styled.div`
display:flex;
`;
const SocialIcon=styled.div`
font-size:10px;
color:#fff;
transition:all 200ms ease-in-out;

&:not(:last-of-type){
    margin-right:10px;
}
&:hover{
    color:#adadad;
}
`;
const Link=styled.a`
color:#fff;
font-size:10px;
transition:all 200ms ease-in-out;
cursor:pointer;

&:not(:last-of-type){
    margin-right:10px;
}
&:hover{
    color:#adadad;
}
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="2em"/>
            <Logo/>
            <Marginer direction="vertical" margin="1em"/>
            <MotivationalText>Just say the magical word</MotivationalText>
            <Marginer direction="vertical" margin="1em"/>
            <Button>Start a Project</Button>
            <Marginer direction="vertical" margin="1em"/>
            <AccessibilityContainer>
                <PrivacyContainer>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                    <Link>Contact</Link>
                </PrivacyContainer>
                <SocialContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </SocialIcon>
                     <SocialIcon>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </SocialIcon>
                </SocialContainer>
            </AccessibilityContainer>
        </FooterContainer>
    )
}
