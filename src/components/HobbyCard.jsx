import React from 'react';
import '../App.css';

export default function HobbyCard({ id, selectedSlide, handleRadioChange, title, description }) {
  return (
    <>
      <input
        type="radio"
        name="slide"
        id={id}
        checked={selectedSlide === id}
        onChange={handleRadioChange}
      />
      <label htmlFor={id} className="hobby-card">
        <div className="row">
          <div className="description">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  );
}