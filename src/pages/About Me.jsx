import React, { useState } from 'react';
import '../App.css';
import HobbyCard from '../components/HobbyCard';

const About = () => {
  const [selectedSlide, setSelectedSlide] = useState('c1');

  const handleRadioChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  const hobbies = [
    {
      id: 'c1',
      title: 'Surfing',
      description: "I'm originally from San Clemente, CA and was lucky enough to grow up surfing and enjoying the ocean.",
    },
    {
      id: 'c2',
      title: 'The Great Outdoors',
      description: "I've had opportunities to visit a number of national parks to camp and backpack through. Honorable mentions include Yosemite and Zion National Parks.",
    },
    {
      id: 'c3',
      title: 'Motorcycling',
      description: 'Motorcycling, a childhood dream, became a lifelong passion as I dedicated time to learning techniques, adhering to safety, and continually improving my skills.',
    },
    {
      id: 'c4',
      title: 'Weightlifting',
      description: "Progressing in weightlifting, whether lifting heavier or hitting PR's provides a sense of accomplishment and motivation.",
    },
  ];

  return (
    <div>
      <h1 className="center">About Me</h1>
      <p className='center h5 p-text'>Creative problem-solver passionate about crafting innovative solutions and bringing ideas to life through design and technology</p>      
      <div className="wrapper">
        <div className="container">
          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.id}
              id={hobby.id}
              selectedSlide={selectedSlide}
              handleRadioChange={handleRadioChange}
              title={hobby.title}
              description={hobby.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;