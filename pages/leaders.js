import React from 'react';
import Header from "../components/header";
import styles from "../styles/leaders.module.css";
import usersList from "../store/usersList";

const Leaders = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>Leaders</h1>
      <div>
        {usersList.sortLeaders().map(item => <div key={item.id}>{item.name}</div>)}
      </div>
    </div>
  );
};

export default Leaders;
