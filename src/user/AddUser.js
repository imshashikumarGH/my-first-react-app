import React from "react";

const AddUser = (props) => {
    const AddUserHandler = (event) =>{
    }
  return (
    <form onSubmit={AddUserHandler}>
      <label html="username">Username</label>
      <input id="username" type="text" />
      <label html="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
