import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding : 4rem 0;
`

const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: 800;
  
  a {
    text-decoration: none;
    color: black;
    
    :hover {
      color : #ffe3e3;
    }
  }
  
`

const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
`

export const Header = ({ title, subtitle, headerTo }) => {

  const to = headerTo ? headerTo : '/';

  return (
    <Wrapper>
      <Title><Link to={to}>{title}</Link></Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
