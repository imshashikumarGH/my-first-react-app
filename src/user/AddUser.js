import React, { useState } from "react";
import Card from "../common/Card";
import classes from './AddUser.module.css';
import Button from "../common/Button";


const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName]  = useState();
  const [enteredAge, setEnteredAge]  = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  const UserNameChangeHandler = (event) =>{
    setEnteredUserName(event.target.value);
  }

  const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value);
  }

  return (
    <Card indexClassName = {classes.input}>
      <form onSubmit={AddUserHandler}>
        <label html="username">Username</label>
        <input id="username" type="text" onClick={UserNameChangeHandler}/>
        <label html="age">Age (Years)</label>
        <input id="age" type="number" onClick={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
