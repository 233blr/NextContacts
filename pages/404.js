import Anchor from "../components/anchor";
import styles from "../styles/header.module.css";

const Error = () => {
  return (
    <div>
      <h1 className={styles.heading}>Page not found</h1>
      <Anchor href={'/'} text={'To Main Page'} />
    </div>
  )
}

export default Error;
