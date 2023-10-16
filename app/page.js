'use client';
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import useGetUsers from '@/hooks/useGetUsers';

import Image from 'next/image';
import Logo from '@/components/Logo';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import arrowIcon from '@/assets/icons/arrow.svg';

import styles from './page.module.sass';

export default function Home() {
  const navigation = useRouter();
  const { users, getUsers } = useGetUsers();
  const isLoaded = useMemo(() => users?.length > 0 ?? false, [users]);
  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = useCallback(() => {
    navigation.push('/dashboard');
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.gradient}></div>
      <div className={styles.greetings}>
        <Logo mode="load" />
        <Button onClick={handleClick} className={styles.start} disabled={isLoaded ? false : true}>
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
