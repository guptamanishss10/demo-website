import React from 'react';
import {Element} from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import { OurServices } from '../../components/ourServices';
import { SectionTitle } from '../../components/sectionTitle';
import Service1Img from "../../assets/illustrations/web_development_.png"
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer=styled(Element)`
width:100%;
min-height:500px;
display:flex;
flex-direction:column;
align-items:center;
`;

export function ServicesSection(props){
    return <ServicesContainer name="servicesSection">
        <SectionTitle>Best Quality Software</SectionTitle>
        <Marginer direction="vertical" margin="3em"/>
        <OurServices title="Fully intergrated Service" 
        description="Build React website responsive | Beginner React JS From scratch with smooth scroll"
        imgUrl={Service1Img}/>

        <OurServices title="Fully intergrated Service" 
        description="Build React website responsive | Beginner React JS From scratch with smooth scroll"
        imgUrl={Service2Img}
        isReversed
        />

        <OurServices title="Fully intergrated Service" 
        description="Build React website responsive | Beginner React JS From scratch with smooth scroll"
        imgUrl={Service3Img}/>
    </ServicesContainer>

}