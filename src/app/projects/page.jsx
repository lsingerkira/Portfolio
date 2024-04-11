import React from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Profile from '../../components/Profile/Profile';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

const companies = [
  {
    name: "Portfolio Project",
    description: "Creating my portfolio using React and CSS.",
    link: "https://github.com/lsingerkira/Portfolio",
  },
  {
    name: "Project 2",
    description: "Description of project 2",
    link: "https://www.project2.com",
  },
  {
    name: "Project 3",
    description: "Description of project 3",
    link: "https://www.project3.com",
  },
  {
    name: "Project 4",
    description: "Description of project 4",
    link: "https://www.project4.com",
  },
  // {
  //   name: "Company 5",
  //   description: "Description of company 5",
  //   link: "https://www.company5.com",
  // },
  // {
  //   name: "Company 6",
  //   description: "Description of company 6",
  //   link: "https://www.company6.com",
  // },
];

export default function Projects() {
  return (
    <div>
      <Profile
        title="Projects"
        content="This is a list of the projects I have worked on:"
      />

      <div className="company-display">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            description={company.description}
            link={company.link}
          />
        ))}
      </div>
    </div>
  );
}
