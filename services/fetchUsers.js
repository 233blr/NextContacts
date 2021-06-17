import usersList from "../store/usersList";

const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=50')
  const json = await response.json();
  usersList.parseUsersData(json.results);
}

export default fetchUsers;
