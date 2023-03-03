import React, { useState } from "react";
import Card from "../common/Card";
import classes from "./AddUser.module.css";
import Button from "../common/Button";
import ErrorModule from "../common/ErrorModule";
import Wrapper from "../helper/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();

    //checking empty value
    if (enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title : "Invalid Input",
        message: "!! Please Enter a Valid Name and Age (nom empty...)!!"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title : "Invalid Age",
        message: "!! Please Enter a Valid Age ( > 0 )!!"
      })
      return;
    }

    //doing something
    props.onAddUser(enteredUserName, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };

  const UserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const ErrorHandler =()=>{
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModule title={error.title} message={error.message} onConfirm = {ErrorHandler} />}
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
    </Wrapper>
  );
};

export default AddUser;
