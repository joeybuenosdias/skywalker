import React from 'react';
import stacklineLogo from '../../stackline-logo.png'

/** styles */
import styles from './Header.module.css';

export const Header = () => (
    <header className={styles.header}>
        <img
            alt="stackline logo"
            className={styles.logo}
            src={stacklineLogo}
        />
    </header>
);

export default Header;