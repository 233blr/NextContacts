import MainContainer from "../components/mainContainer";
import styles from "../styles/header.module.css";

const Error = () => {
  return (
    <MainContainer>
      <h1 className={styles.heading}>Page not found</h1>
    </MainContainer>
  )
}

export default Error;
