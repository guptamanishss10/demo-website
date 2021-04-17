import React from 'react';
import styled from 'styled-components'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";

const CardContainer=styled.div`
width:350px;
height:550px;
background-color:#fff;
box-shadow:0px 0px 7px rgba(17,17,17,0.2);
border-radius:3px;
margin:5px 0;
position:relative;
padding:20px 10px;
`;
const QuoteIcon=styled.div`
position:absolute;
top:10px;
left:15px;
color:#D1D1D1;
font-size:25px;
`;
const ReviewText=styled.p`
font-size:15px;
color:#585858
font-wight:normal;
display:flex;
justify-content:center;
`;
const Line=styled.span`
min-width: 100%;
min-height: 1px;
margin-bottom: 1em;
background-color: #cdcdcd;
display: flex;
`;
const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;
const Username = styled.span`
  font-size: 15px;
  color: #000;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export function ReviewCard(props){
    const { reviewText, username, userImgUrl } = props;
  return <CardContainer>
     <QuoteIcon>
      <FontAwesomeIcon icon={faQuoteLeft} />
      </QuoteIcon>
   
      <Marginer direction="vertical" margin="2em" />
      
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="2em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>

  </CardContainer>
}