import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Footer = () => {

  return (
    <Wrapper>
      <Container>
        <div>Foooooter.</div>
      </Container>
    </Wrapper>
  )
};

