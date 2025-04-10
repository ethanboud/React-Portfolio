import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from '../components/Project';

export default function Portfolio() {
  const projects = [
    { title: 'Employee Management Tracker',
      secondTitle:'Demo',
      imageSrc: 'src/assets/images/employee management.jpg',
      altText: 'placeholder image 1',
      link: 'https://github.com/ethanboud/Employee-Management-Tracker',
      secondLink: 'https://drive.google.com/file/d/16W_JSw3ajtfD9kvT8w27LTj28t_mEt6b/view?usp=drive_link' 
    },
    { title: 'Vehicle-Builder',
      secondTitle:'Demo',
      imageSrc: 'src/assets/images/vehicle builder.jpg',
      altText: 'placeholder image 2',
      link: 'https://github.com/ethanboud/Vehicle-Builder',
      secondLink: 'https://drive.google.com/file/d/141I82oNfFKl4zdrYR7Cq4omo5QL6c44h/view?usp=sharing' 
    },
    { title: 'README-Generator',
      secondTitle:'Demo',
      imageSrc: 'src/assets/images/ReadMe Generator.jpg',
      altText: 'placeholder image 3',
      link: 'https://github.com/ethanboud/README-Generator',
      secondLink: 'https://drive.google.com/file/d/1yUbLH4OICBU6d_wWEeRuMy3ilfyJSu_Q/view?usp=sharing' 
    },
    { title: 'TaskEfficient',
      secondTitle:'Application',
      imageSrc: 'src/assets/images/task efficient.jpg',
      altText: 'placeholder image 4',
      link: 'https://github.com/ethanboud/TaskEfficient',
      secondLink: 'https://ethanboud.github.io/TaskEfficient/' 
    },
    { title: 'Book-Search-with-MERN-and-Authentication',
      secondTitle:'Deployment',
      imageSrc: 'src/assets/images/booksearch.jpg',
      altText: 'placeholder image 5',
      link: 'https://github.com/ethanboud/Book-Search-with-MERN-and-Authentication',
      secondLink: 'https://book-search-with-mern-and-authentication.onrender.com/' 
    },
    { title: 'Social-Database',
      
      imageSrc: 'src/assets/images/social database.jpg',
      altText: 'placeholder image 6',
      link: 'https://github.com/ethanboud/Social-Database',
       
    },
  ];

  return (
    <div>
      <h1 className='center'>Portfolio</h1>
      <p className='center h5 p-text'>Below is a list of projects I have completed and contributed to.</p>
      <section className="card-table">
        {projects.map((project, index) => (
          <Project key={index}
          imageSrc={project.imageSrc}
          altText={project.altText}
          link={project.link}
          secondLink={project.secondLink} 
          title={project.title}
          secondTitle={project.secondTitle}
          />
        ))}
      </section>
    </div>
  );
}