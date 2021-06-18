import React from 'react';
import Header from "../components/header";
import styles from "../styles/leaders.module.css";
import usersList from "../store/usersList";
import Leader from "../components/leader";
import Anchor from "../components/anchor";

const Leaders = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>Leaders</h1>
      <div>
        {usersList.sortLeaders().length ?
          usersList.sortLeaders().map(item => <Leader key={item.id} leader={item}/>) :
          <div className={styles.leaders_alert}>
            <p>No Leaders 🧐!!!</p>
            <p><Anchor text={'go to Users page'} href={'./users'}/></p>
          </div>}
      </div>
    </div>
  );
};

export default Leaders;
