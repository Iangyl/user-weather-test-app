'use client';
import { useState } from 'react';

import { links } from './index.config';

import Logo from '@/components/Logo';
import BurgerButton from '../BurgerButton';

import styles from './index.module.sass';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div>
          <Logo mode='static' />
          <BurgerButton checked={isMenuOpen} onClick={toggleMenu} />
        </div>
        <nav>
          <ul
            className={`${styles.navbar} ${
              isMenuOpen ? styles.openMenu : ''
            }`}
          >
            {links.map((item, idx) => (
              <li key={idx} className={styles.navbarItem}>
                <a className={styles.navbarItemLink} href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
