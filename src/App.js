import React, {useState} from "react";
import AddUser from "./user/AddUser";
import UserList from "./user/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserbyInput = (uName, uAge) => {
    setUserList((prevUserList) => {
      const user = {
        name: uName,
        age: uAge,
      };
      return [user, ...prevUserList];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserbyInput}></AddUser>
      <UserList users={userList} />
    </div>
  );
}

export default App;
