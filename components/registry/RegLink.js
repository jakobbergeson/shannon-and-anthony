import { useState } from 'react';
import Image from 'next/image';
import Venmo from '../../public/qr-v-bl-cl.png';
import styles from '../../styles/RegLink.module.css';

export default function RegLink() {

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div
      className={styles.wrapper}
    >
      <div
        className={styles.container}
      >
        <a
          className={styles.link}
          href="https://www.amazon.com/wedding/share/shannonandanthonyregistry"
          target='_blank'
          rel='noreferrer'
          onMouseOver={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" /></svg>
          <div className={hover1 ? styles.lineShow : styles.lineHidden} />
        </a>
      </div>
      <div
        className={styles.container}
      >
        <a
          className={styles.linkChill}
          href='https://venmo.com/code?user_id=2324927654920192532&created=1667176994'
          target='_blank'
          rel='noreferrer'
          onMouseOver={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <Image
            src={Venmo}
            alt='Venmo QR code'
            width={214}
            height={175}
          />
          <div className={hover2 ? styles.lineShow : styles.lineHidden} />
        </a>
      </div>
    </div>
  );
}
