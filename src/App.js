import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { HEXAGONS_ROUTE, STROKED_HEXAGONS_ROUTE } from './constants';
import Hexagons from './containers/Hexagons/Hexagons';
import Home from './containers/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={HEXAGONS_ROUTE} element={<Hexagons />} />
        <Route path={STROKED_HEXAGONS_ROUTE} element={<Hexagons type={'stroked'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
