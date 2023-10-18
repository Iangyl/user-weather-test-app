'use client';
import { useCallback, useMemo, useState } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

import { links } from './index.config';

import Link from 'next/link';
import Logo from '@/components/Logo';
import BurgerButton from '../BurgerButton';

import styles from './index.module.sass';

const Header = () => {
  const { width } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const status = useMemo(
    () => (width < 1024 && isMenuOpen ? 'opened' : 'closed'),
    [width, isMenuOpen]
  );

  const handleLinkClick = useCallback(() => {setIsMenuOpen(false)}, [])

  return (
    <header className={`${styles.header} ${styles[status]}`}>
      <div className={styles.navContainer}>
        <div>
          <Logo mode="static" />
          <BurgerButton checked={isMenuOpen} onClick={toggleMenu} />
        </div>
        <ul className={`${styles.navbar} ${isMenuOpen ? styles.openMenu : ''}`}>
          {links.map((item, idx) => (
            <li key={idx} className={styles.navbarItem}>
              <Link className={styles.navbarItemLink} onClick={handleLinkClick} href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
