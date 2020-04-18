import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding : 4rem 0;
`

const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: 800;
`

const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
`

export const Header = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
