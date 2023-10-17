'use client';
import Header from './Header';
import Footer from './Footer';

import styles from './index.module.sass';

const PageWrapper = ({ children }) => (
  <>
    <Header />
    <main className={styles.pageContent}>{children}</main>
    <Footer />
  </>
);

export default PageWrapper;
