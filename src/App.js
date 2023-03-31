import { Route, Routes } from 'react-router-dom';
import Menu from 'views/Menu/Menu';
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
      </Routes>
    </div>
  );
}

export default App;
