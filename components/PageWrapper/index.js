'use client';
import Header from './Header';

import styles from './index.module.sass';

const PageWrapper = ({ children }) => (
  <>
    <Header />
    <main className={styles.pageContent}>{children}</main>
  </>
);

export default PageWrapper;
