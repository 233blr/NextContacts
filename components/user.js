import React from 'react';
import styles from '../styles/user.module.css';

const User = ({user}) => {
  return (
    <div className={styles.user_item}>
      <img src={user.image} alt={user.name}/>
      <p>{user.name}</p>
      <p>{user.lastName}</p>
      <p>{user.login}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.rating}</p>
    </div>
  );
};

export default User;
