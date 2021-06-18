import {useRouter} from "next/router";
import {useEffect} from "react";
import usersList from "../../store/usersList";
import {observer} from "mobx-react-lite";
import styles from "../../styles/userid.module.css";
import Header from "../../components/header";

const UserId = observer(() => {
    const {query} = useRouter();
    useEffect(() => {
      usersList.getUser(query.id);
    }, []);

    return (
      <div>
        <Header/>
        <div className={styles.userid_body}>
          <p>{usersList.user.id}</p>
          <div className={styles.userid_items}>
            <img src={usersList.user.fullImage} alt={usersList.user.name}/>
            <p>{`${usersList.user.name} ${usersList.user.lastName}`}</p>
            <p>{usersList.user.login}</p>
            <p>{usersList.user.email}</p>
            <p>{usersList.user.phone}</p>
            <div className={styles.userid_buttons_body}>
              <button
                className={styles.userid_button}
                type={"button"}
                onClick={() => usersList.ratingHandler(false)}
                disabled={usersList.user.rating === 0}
              >
                -
              </button>
              <p>{usersList.user.rating}</p>
              <button
                className={styles.userid_button}
                type={"button"}
                onClick={() => usersList.ratingHandler(true)}
                disabled={usersList.user.rating === 5}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
)

export default UserId;
