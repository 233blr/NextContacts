import React, {useState} from 'react';
import usersList from "../store/usersList";
import styles from "../styles/sort.module.css";

const Sort = () => {
  const sortItems = [
    'Name', 'Login', 'Email', 'Phone', 'Rating',
  ];

  const [currentCategory, setCategory] = useState('');

  return (
    <div className={styles.sort_body}>
      <ul className={styles.sort_item}>
        {sortItems.map(item => (
          <li
            className={styles.sort_items}
            key={item}
            onClick={() => {
              usersList.sortUsers(item.toLowerCase());
              setCategory(item);
            }}
            style={
              currentCategory === item
                ? {textDecoration: 'underline'}
                : {color: '#000'}
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
