import Anchor from "../components/anchor";
import styles from "../styles/index.module.css";

const App = () => {
  return (
    <div>
      <nav className={styles.nav_bar}>
        <Anchor href={'/'} text={'Main'}/>
        <Anchor href={'/users'} text={'Users'}/>
      </nav>
      <h1>Main Page</h1>
    </div>
  );
};

export default App;
