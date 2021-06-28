import React from 'react';
import MainContainer from "../components/mainContainer";
import styles from "../styles/leaders.module.css";
import usersList from "../store/usersList";
import Leader from "../components/leader";
import Anchor from "../components/anchor";

const Leaders = () => {
  return (
    <MainContainer keywords={'leaders page'}>
      <h1 className={styles.heading}>Leaders</h1>
      <div>
        {usersList.sortLeaders().length ?
          usersList.sortLeaders().map(item => <Leader key={item.id} leader={item}/>) :
          <div className={styles.leaders_alert}>
            <p>No Leaders 🧐!!!</p>
            <p><Anchor text={'go to Users page'} href={'./users'}/></p>
          </div>}
      </div>
    </MainContainer>
  );
};

export default Leaders;
