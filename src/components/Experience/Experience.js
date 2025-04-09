import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from "react-animate-on-scroll";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0px;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// eslint-disable-next-line no-unused-vars
const ExperienceContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
  background: ${({ theme }) => theme.bg};
`;

const ExperienceTitle = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text_primary};
`;

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

const ExperienceCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const ExperienceRole = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const ExperienceCompany = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
`;

const ExperienceDuration = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <ScrollAnimation animateIn="fadeInLeft">
          <ExperienceTitle>Experience</ExperienceTitle>
        </ScrollAnimation>
        <ExperienceTimeline>
          <ScrollAnimation animateIn="fadeInLeft">
            <ExperienceCard>
              <ExperienceRole>AI Associate Data Analyst Intern</ExperienceRole>
              <ExperienceCompany>NeoDocto</ExperienceCompany>
              <ExperienceDuration>January 2024 - June 2024</ExperienceDuration>
              <StyledList>
                <li>Analyzed large datasets using AI and machine learning techniques</li>
                <li>Developed data visualization dashboards</li>
                <li>Collaborated with cross-functional teams on AI-driven solutions</li>
              </StyledList>
            </ExperienceCard>
          </ScrollAnimation>
        </ExperienceTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;