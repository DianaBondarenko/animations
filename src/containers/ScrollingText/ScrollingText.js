import styles from './ScrollingText.module.scss';

const ScrollingText = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue mi et est lacinia, ut ullamcorper mauris aliquet. Nullam in pulvinar tellus. Donec ac pulvinar tellus. In eu pulvinar odio, quis placerat mi. Donec feugiat quis tellus vel malesuada. In ultricies eleifend felis in sollicitudin. Etiam consectetur iaculis ex, at dictum magna suscipit non. Sed et auctor felis. Aenean et tellus tincidunt ex porta cursus.';
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>{text}</h2>
      </div>
      <div className={styles.section}>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default ScrollingText;
