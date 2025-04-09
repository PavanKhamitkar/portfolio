import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Pavan Khamitkar</strong>, an enthusiastic Artificial Intelligence and Data Science student with a CGPA of 8.95, currently pursuing my Bachelor's at PVGCOET, Pune.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I bring hands-on experience from my internship at NeoDocto, where I optimized machine learning models, automated data pipelines using Python and SQL, and created insightful dashboards with Power BI and Tableau—helping improve efficiency and decision-making.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              My passion for building impactful tech solutions led me to work on a variety of projects—from automating student result analysis using Python, to building an AI-powered chatbot and even a real-time weather website. I enjoy transforming data into meaningful insights and developing tools that solve real-world problems.
              <div className="tagline2">
                I’m confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
