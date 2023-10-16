import Image from 'next/image';
import Logo from '@/app/components/Logo';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import arrowIcon from '@/app/assets/icons/arrow.svg';

import styles from './page.module.sass';

export default function Home() {
  const isLoaded = true;
  return (
    <main className={styles.main}>
      <div className={styles.gradient}></div>
      <div className={styles.greetings}>
        <Logo mode="load" />
        <Button className={styles.start} disabled={isLoaded ? false : true}>
          Get Started
          {isLoaded ? (
            <Image className={styles.ready} src={arrowIcon} alt="" />
          ) : (
            <CircularProgress className={styles.progress} />
          )}
        </Button>
      </div>
    </main>
  );
}
