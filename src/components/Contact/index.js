import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 80px 0;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <Title>Contact</Title>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;