import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/pictures/company_team.jpg';
import {Logo} from '../../components/logo/';
import {Marginer} from '../../components/marginer';
import {Button} from '../../components/button/index';
import { DownArrow } from '../../components/downArror';
import { Navbar } from '../../components/navbar';
import {Element, scroller} from 'react-scroll';
import Typed from 'react-typed'
const TopContainer =styled.div`
 width:100%;
 height:100vh;
 background-image:url(${BackgroundImg});
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
 position: relative;
`
const BackContainer =styled.div`
 width:100%;
 height:100vh;
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
 background-color:rgba(53,53,53,0.88);
 display:flex;
 flex-direction:column;
 align-items:center;
`;

const MotivationalText=styled.h1`
font-size:20px;
font-weight: medium ;
color:#fff;
margin:0;
`;
const DownArrowContainer=styled.div`
position:absolute;
bottom:20px;
left:50%;
transform:translateX(-50%);
z-index: 1;
`;

export function TopSection(props){
    const scrollToNextSection=() =>{
        scroller.scrollTo("servicesSection",{smooth:true,duration:1500})
    }


    return (
        <Element name="topSection">
        <TopContainer>
         <BackContainer>
             <Navbar/>
             <Marginer direction="vertical" margin="2em"/>
             <Logo/>
             <Marginer direction="vertical" margin="1em"/>
             <MotivationalText>  Software Development
                 </MotivationalText>
             <Marginer direction="vertical" margin="1em"/>
             <Button>Contact</Button>
             <DownArrowContainer onClick={scrollToNextSection}>
             <DownArrow/>
             </DownArrowContainer>
              
         </BackContainer>
         </TopContainer>
         </Element>
    );
}
