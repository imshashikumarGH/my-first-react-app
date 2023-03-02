import React from "react";
import Card from "../common/Card";
import classes from './AddUser.module.css';
import Button from "../common/Button";


const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card indexClassName = {classes.input}>
      <form onSubmit={AddUserHandler}>
        <label html="username">Username</label>
        <input id="username" type="text" />
        <label html="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
