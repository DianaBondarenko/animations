import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { HEXAGONS_ROUTE, STROKED_HEXAGONS_ROUTE } from '../../constants';

const Home = () => {
  return (
    <div className={styles.container}>
      <div>Hello!</div>
      <ul>
        <li>
          <Link to={HEXAGONS_ROUTE}>Hexagons</Link>
        </li>
        <li>
          <Link to={STROKED_HEXAGONS_ROUTE}>Stroked Hexagons</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
