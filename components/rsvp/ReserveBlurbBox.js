import styles from '../../styles/ReserveBlurbBox.module.css';
import { useState } from 'react';

export default function ReserveBlurbBox({
  header,
  paragraph
}) {

  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.container}
    >
      <p
        className={styles.header}
      >
        {header}
      </p>
      <p
        className={styles.paragraph}
      >
        {paragraph}
      </p>
      <a
        href='mailto: shannonandanthony2023@gmail.com'
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.email}
      >
        shannonandanthony2023@gmail.com.
        <div className={hover ? styles.lineShow : styles.lineHidden} />
      </a>
    </div>
  );
}
