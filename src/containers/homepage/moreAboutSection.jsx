import React from 'react';
import {Element} from 'react-scroll';
import styled from 'styled-components';
import { SectionTitle } from '../../components/sectionTitle';
import AboutImgUrl from '../../assets/illustrations/rocket_launch_.png';
const MoreAboutContainer=styled(Element)`
min-height:400px;
display:flex;
flex-direction:column;
align-items:center;
`;

const AboutContainer=styled.div`
display:flex;
max-width:60%;
align-items:center;

flex-wrap:wrap-reverse;
`;

const AboutText=styled.p`
font-size:10px;
color:#2F2F2F;
font-weight:normal;
line-height:1.4;
`;

const AboutImg=styled.img`
width:300px;
height:250px;
`;


export function MoreAboutSection(props){
   return(
    <MoreAboutContainer>
        <SectionTitle>More About Beema</SectionTitle>
        <AboutContainer>
            <AboutText>
            Beema is about designing, building and deliverying best quality
          software for your company. {<br />}
          {<br />} We make sure that you get the best software inferstracture
          and set of applications to ensure the best experience of your clients.{" "}
          {<br />}
          {<br />} So wether you are handling thousands of payment transactions
          or you’re just starting out, you are in the right place.
            </AboutText>
            <AboutImg src={AboutImgUrl}/>
        </AboutContainer>
    </MoreAboutContainer>
   );
}