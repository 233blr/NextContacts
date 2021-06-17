import {useState} from 'react';
import Anchor from "../components/anchor";

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Vasia'},
    {id: 2, name: 'Evgeny'},
  ])

  // const URL = 'https://randomuser.me/api/?results=50';

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map(user =>
            <li key={user.id}>
              <Anchor href={`/users/${user.id}`} text={user.name}/>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Users;
