import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About Me</Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
      </li>
    </ul>
  );
}

export default NavBar;