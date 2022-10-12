import styles from "./Hexagon.module.scss";

const Hexagon = ({ type }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.hexagon} ${type === "stroked" && styles.stroked}`}
      ></div>
    </div>
  );
};

export default Hexagon;
