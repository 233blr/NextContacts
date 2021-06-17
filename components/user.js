import styles from '../styles/user.module.css';
import usersList from "../store/usersList";
import Link from "next/link";

const User = ({user}) => {
  return (
    <div className={styles.user_item}>
      <img className={styles.user_img} src={user.image} alt={user.name}/>
      <p>{`${user.name} ${user.lastName}`}</p>
      <p>{user.login}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.rating}</p>
      <div
        className={styles.user_buttons}
        type={"button"}
      >
        <button className={styles.user_button}>
          <Link href={`/users/${user.id}`}>
            <a className={styles.user_anchor}>
              View
            </a>
          </Link>
        </button>
        <button
          className={styles.user_button}
          type={"button"}
          onClick={(event) => {
            usersList.deleteUser(user.id)
            event.stopPropagation()
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
