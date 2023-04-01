import { Route, Routes } from 'react-router-dom';
import Contact from 'views/Contact/Contact';
import Menu from 'views/Menu/Menu';
import Reviews from 'views/Reviews/Reviews';
import './App.css';
import { publicRoutes } from './routes';
import Header from './views/Header/Header';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={publicRoutes.HOME} element={ <Home /> } />
        <Route path={publicRoutes.MENU} element={ <Menu /> } />
        <Route path={publicRoutes.REVIEWS} element={ <Reviews /> } />
        <Route path={publicRoutes.CONTACT} element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
