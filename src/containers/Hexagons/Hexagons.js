import styles from "./Hexagons.module.scss";
import Hexagon from "../../components/Hexagon/Hexagon";

const Hexagons = ({ type }) => {
  const rowsQuantity = 15;
  const elemQuantity = 20;
  const rowsArr = new Array(rowsQuantity);
  const elemArr = new Array(elemQuantity);
  rowsArr.fill(1);
  elemArr.fill(1);

  return (
    <div className={styles.container}>
      {rowsArr.map((el) => (
        <div className={styles.row}>
          {elemArr.map((el) => (
            <Hexagon type={type} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Hexagons;
