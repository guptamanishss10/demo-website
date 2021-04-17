import React from 'react';
import styled from 'styled-components';
const ServicesContainer=styled.div`
display:flex;
align-items:center;
flex-direction:${({isReversed})=>isReversed && "row-reverse"};
margin-bottom:3em;  
`;

const ServiceImg=styled.img`
width:6em;
height:6em;
`

const DescriptionContainer=styled.div`
display:flex;
flex-direction:column;
max-width:60%;
text-align:center;
`
const Title=styled.h1`
color:#000;
font-size:10px;
font-weight:700;
margin: 5px 0;
`;
const Details=styled.p`
color:#7A7A7A;
font-size:8px;
text-align:center;
max-width:90%;
`

export function OurServices(props){
    const { imgUrl,title,description,isReversed}=props;
  return( <ServicesContainer isReversed={isReversed}>
      <DescriptionContainer>
          <Title>{title}</Title>
          <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl}/>
  </ServicesContainer>
  );
}