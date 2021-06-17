import parseUsersData from "../utils/parseUsersData";
import styles from '../styles/users.module.css';
import User from "../components/user";

export const Users = ({users}) => {
  return (
    <div>
      <h1>Users</h1>
      <div className={styles.users_list}>
        {users.map(user => <User key={user.id} user={user}/>)}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://randomuser.me/api/?results=50')
  const json = await response.json();
  const users = parseUsersData(json.results);
  return {
    props: {users},
  }
}
