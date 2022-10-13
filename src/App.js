import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { HEXAGONS_ROUTE, SCROLLING_TEXT_ROUTE, STROKED_HEXAGONS_ROUTE } from './constants';
import Home from './containers/Home/Home';
import Hexagons from './containers/Hexagons/Hexagons';
import ScrollingText from './containers/ScrollingText/ScrollingText';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={HEXAGONS_ROUTE} element={<Hexagons />} />
        <Route path={STROKED_HEXAGONS_ROUTE} element={<Hexagons type={'stroked'} />} />
        <Route path={SCROLLING_TEXT_ROUTE} element={<ScrollingText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
