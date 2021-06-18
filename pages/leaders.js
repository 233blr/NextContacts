import React from 'react';
import Header from "../components/header";
import styles from "../styles/leaders.module.css";
import usersList from "../store/usersList";
import Leader from "../components/leader";

const Leaders = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>Leaders</h1>
      <div>
        {usersList.sortLeaders().map(item => <Leader key={item.id} leader={item}/>)}
      </div>
    </div>
  );
};

export default Leaders;
