import '../App.css';

export default function Project({ id, link, secondLink, title, secondTitle }) {
  return (
    <div className="card" for={id}>
      <div className="overlay">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="button">{title}</span>
        </a>
        <a href={secondLink} target="_blank" rel="noopener noreferrer">
          <span className="button">{secondTitle}</span>
        </a>
      </div>
    </div>
  );
}