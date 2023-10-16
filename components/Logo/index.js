import { useMemo } from 'react';
import Image from 'next/image';
import weatherIcon from '@/assets/icons/weather-logo.svg';

import styles from './index.module.sass';

const sign = 'the weather';

const Logo = ({ mode }) => {
  const [logo, logoIcon, logoSign] = useMemo(
    () =>
      mode === 'load'
        ? ['logoLoad', 'logoIconLoad', 'logoSignLoad']
        : ['logoStatic', 'logoIconStatic', 'logoSignStatic'],
    [mode]
  );
  
  return (
    <figure className={styles[logo]}>
      <Image className={styles[logoIcon]} src={weatherIcon} alt="" />
      <figcaption className={styles[logoSign]}>
        {sign}
      </figcaption>
    </figure>
  );
};

export default Logo;
