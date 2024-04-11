import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard.jsx';
import './page.css';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx'; // Import the WorkWidget component
import SkillsWidget from '../components/SkillsWidgets/SkillsWidget.jsx';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
// Define your work experiences data
const experiences = [
  {
    logo: './images/Ensign.jpg',
    organization: 'Ensign College',
    jobTitle: 'Data Analyst',
    startYear: 2021,
    endYear: 'Present'
  },
  {
    logo: './images/black.jpg',
    organization: 'Rodrigues & Singer Advogados',
    jobTitle: 'Tax Law Specialist',
    startYear: 2015,
    endYear: 2017
  },
  {
    logo: './images/queiroz.jpg',
    organization: 'Construtora Queiroz Galvão S.A.',
    jobTitle: 'Consulting Lawyer',
    startYear: 2013,
    endYear: 2015
  },
  // {
  //   logo: './images/microsoft (2).svg',
  //   organization: 'Microsoft',
  //   jobTitle: 'Software Engineer',
  //   startYear: 2010,
  //   endYear: 2011
  // }
  // Add more experiences as needed
];
const skills = [
  { name: "HTML", proficiency: 60, icon: './images/3.jpg' },
  { name: "CSS", proficiency: 50, icon: './images/5.jpg' },
  { name: "JavaScript", proficiency: 75, icon: './images/js.jpg' },
]

const articles = [
  {
    date: 'Apr 10, 2024',
    title: 'Stack Overflow',
    content: '"Empowering the world to develop technology through collective knowledge."',
    link: 'https://stackoverflow.com/',
  },
  {
    date: 'Apr 10, 2024',
    title: 'The Flip Side',
    content: '"Were doing a little maintenance and will be back soon."',
    link: 'https://www.theflipside.io/',
  },
  {
    date: 'Apr 10, 2024',
    title: 'Tableau Public',
    content: '"Welcome to Tableau Public. A free platform to explore, create, and publicly share data visualizations online."',
    link: 'https://public.tableau.com/app/discover',
  },
];

const Home = () => {
  return (
    <div className="page-container">
      <div className="articles">
        <main>
          <div className="article-card-header">
            <img className="avatar" src='./images/leo.jpg' alt="Avatar" />
            <div>
              <time>{/* Add your date here */}</time>
              <h1>Leandro Singer Afonso</h1>
            </div>
          </div>
          <p className="intro-paragraph">
            Software Engineer, Data Analyst, Scrum Master, Project Manager.
          </p>
          <div className="social-media-icons">
            <a href = "https://www.facebook.com/profile.php?id=100011484652659">
            <img src="./images/ficon.webp" alt="Facebook" />
            </a>
            <a href = "https://twitter.com/lsingerkira">
            <img src="./images/xicon.png" alt="Twitter" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </main>

        <div className="articles-card">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
      </div>

      <div className="right-side">

      <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
      />
        {/* WorkWidget component */}
        <WorkWidget
          title="My Work Experience"
          content="Check out my previous work experiences."
          experiences={experiences}
        />
    <SkillsWidget
              title={"Skills"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              skills={skills}
      />


      </div>

    </div>

  );

};


export default Home;
