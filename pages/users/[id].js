import {useRouter} from "next/router";
import {useEffect} from "react";
import usersList from "../../store/usersList";
import {observer} from "mobx-react-lite"

const UserId = observer(() => {
    const {query} = useRouter();
    useEffect(() => {
      usersList.getUser(query.id);
    }, []);

    return (
      <div>
        User with ID {query.id}
        <p>{usersList.user.name}</p>
      </div>
    );
  }
)

export default UserId;
