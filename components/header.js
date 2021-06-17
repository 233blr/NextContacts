import React from 'react';
import styles from "../styles/index.module.css";
import Anchor from "./anchor";

const Header = () => {
  return (
    <div>
      <nav className={styles.nav_bar}>
        <Anchor href={'/'} text={'Main'}/>
        <Anchor href={'/users'} text={'Users'}/>
        <Anchor href={'/leaders'} text={'Leaders'}/>
      </nav>
    </div>
  );
};

export default Header;
