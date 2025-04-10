import NavBar from './NavBar';

function Header() {
  return (
    <header className="navbar">
      <div className="container-fluid">
        <h1 className="logo">BOUD</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;