'use client';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Logo from '@/components/Logo';
import Button from '@mui/material/Button';

import arrowIcon from '@/assets/icons/arrow.svg';

import styles from './page.module.sass';

export default function Home() {
  const navigation = useRouter();

  const handleClick = useCallback(() => {
    navigation.push('/dashboard?mode=all_users');
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.gradient}></div>
      <div className={styles.greetings}>
        <Logo mode="load" />
        <Button
          onClick={handleClick}
          className={styles.start}
        >
          Get Started
          <Image className={styles.ready} src={arrowIcon} alt="pic" />
        </Button>
      </div>
    </main>
  );
}
