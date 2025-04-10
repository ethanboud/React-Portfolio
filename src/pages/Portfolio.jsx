import React from 'react';
import '../App.css';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      id: 'p1',
      title: 'Employee Management Tracker',
      secondTitle:'Demo',
      link: 'https://github.com/ethanboud/Employee-Management-Tracker',
      secondLink: 'https://drive.google.com/file/d/16W_JSw3ajtfD9kvT8w27LTj28t_mEt6b/view?usp=drive_link' 
    },
    {
      id: 'p2',
      title: 'Vehicle-Builder',
      secondTitle:'Demo',
      link: 'https://github.com/ethanboud/Vehicle-Builder',
      secondLink: 'https://drive.google.com/file/d/141I82oNfFKl4zdrYR7Cq4omo5QL6c44h/view?usp=sharing' 
    },
    {
      id: 'p3',
      title: 'README-Generator',
      secondTitle:'Demo',
      link: 'https://github.com/ethanboud/README-Generator',
      secondLink: 'https://drive.google.com/file/d/1yUbLH4OICBU6d_wWEeRuMy3ilfyJSu_Q/view?usp=sharing' 
    },
    {
      id: 'p4',
      title: 'TaskEfficient',
      secondTitle:'Application',
      link: 'https://github.com/ethanboud/TaskEfficient',
      secondLink: 'https://ethanboud.github.io/TaskEfficient/' 
    },
    {
      id: 'p5',
      title: 'Book-Search-with-MERN-and-Authentication',
      secondTitle:'Deployment',
      link: 'https://github.com/ethanboud/Book-Search-with-MERN-and-Authentication',
      secondLink: 'https://book-search-with-mern-and-authentication.onrender.com/' 
    },
    {
      id: 'p6',
      title: 'Social-Database',

      link: 'https://github.com/ethanboud/Social-Database',
    }
  ];

  return (
    <div className="card-table">
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          link={project.link}
          secondLink={project.secondLink}
          title={project.title}
          secondTitle={project.secondTitle}
        />
      ))}
    </div>
  );
};

export default Portfolio;