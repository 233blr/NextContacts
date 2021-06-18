import styles from "../styles/leader.module.css";

const Leader = ({leader}) => {
  return (
    <div className={styles.leader_body}>
      <p className={styles.leader_item}>{`${leader.name} ${leader.lastName}`}</p>
      <p className={styles.leader_item}>{leader.rating}</p>
    </div>
  );
};

export default Leader;
