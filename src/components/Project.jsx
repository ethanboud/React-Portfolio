import React from 'react';
import '../App.css';

export default function Project({ imageSrc, altText, link, secondLink, title, secondTitle }) {
  return (
    <div className="card">
      <div className="overlay">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="button">{title}</span>
        </a>
        <a href={secondLink} target="_blank" rel="noopener noreferrer">
          <span className="button">{secondTitle}</span>
        </a>
      </div>
      <img className="image" src={imageSrc} alt={altText} />
    </div>
  );
}