import {useEffect} from "react";
import fetchUsers from "../services/fetchUsers";
import Header from "../components/header";
import styles from "../styles/heading.module.css"

const App = () => {
  useEffect(async () => {
    await fetchUsers();
  }, []);

  return (
    <div>
      <Header/>
      <div>
        <h1 className={styles.heading}>Main Page</h1>
      </div>
    </div>
  );
}

export default App;
