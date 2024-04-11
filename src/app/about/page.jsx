import React from 'react';
import './about.css'; // Importing the CSS file

export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}

const About = () => {
  return (
    <div className="about-content">
      <p>
        By being analytical, my modus operandi is objective and dispassionate, giving little room for subjectivism. Finding patterns and connections using data to see the core of the situation, understand it, and use this information to reach an outcome is how my brain works and how I make decisions in my personal and professional life.
      </p>

      <p>
        In previous work experiences, I worked as a lawyer for one of the major construction companies in Brazil and learned the necessary skills to work an idea to its implementation. I founded and managed my own Attorneys office, where I successfully designed and implemented a new working method that guided the office to its prosperity.
      </p>

      <p>
        I graduated in Data Analytics (AS) from Ensign college in Spring 2023. Now I am enrolled in Software Engineering to obtain a bachelor's degree. My next step is to transfer to BYU Provo and graduate with a master's in Information Systems. I aim to learn and understand how to work and visualize data and use the skills I got from my previous work experiences and certificates to boost myself into a data analyst/scientist and a project management career in the IT field.
      </p>

      <p>
        I am the president of the Ensign Chess Association, and I have interests in book reading, MTG card game, gym, and triathlon.
      </p>
    </div>
  );
}

export default About;
