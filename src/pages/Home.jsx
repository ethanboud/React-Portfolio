export default function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img 
          src="src\assets\images\profile.JPEG" 
          alt="Your Avatar" 
          className="avatar"
        />
      </div>
      <div className="text-container">
        <h1>Welcome!</h1>
        <p>
          Thank you for taking the time to be here! I've spent a lot of time here and I'm looking forward to sharing
          a bit of myself with the world! So THANK YOU for making that possible!
          <br></br>
          <br></br>
          My name is Ethan and I am a creator, problem solver, and progress seeker. You'll find out more about me
          in the following pages both professionally and personally. 
          <br></br>
          <br></br>
          Should you find yourself wanting to connect,
          feel free to check my socials below or send me a message through my contact page!
        </p>
      </div>
    </div>
  );
}
  


  
  //   return (
  //     <div>
  //       <h1 className='center'>Portfolio</h1>
  //       <p className='center h5 p-text'>Below is a list of projects I have completed and contributed to.</p>
  //       <section className="card-table">
  //         {projects.map((project, index) => (
  //           <Project key={index}
  //           imageSrc={project.imageSrc}
  //           altText={project.altText}
  //           link={project.link}
  //           secondLink={project.secondLink} 
  //           title={project.title}
  //           secondTitle={project.secondTitle}
  //           />
  //         ))}
  //       </section>
  //     </div>
  //   );
  // }