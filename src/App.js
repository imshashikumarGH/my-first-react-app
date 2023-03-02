import React from "react";
import AddUser from "./user/AddUser";
import UserList from "./user/UserList";

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UserList users={[]}/>
    </div>
  );
}

export default App;
