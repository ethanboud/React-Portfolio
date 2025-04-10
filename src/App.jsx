import './App.css';
import Header from './components/Header.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;