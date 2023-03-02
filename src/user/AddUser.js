import React, { useState } from "react";
import Card from "../common/Card";
import classes from "./AddUser.module.css";
import Button from "../common/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState();
  const [enteredAge, setEnteredAge] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();

    //checking empty value
    if (enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    //doing something
    props.onAddUser(enteredUserName ,enteredAge)

    setEnteredUserName("");
    setEnteredAge("");
  };

  const UserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={UserNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
