import React, { useRef, useState } from "react";
import Card from "../common/Card";
import classes from "./AddUser.module.css";
import Button from "../common/Button";
import ErrorModal from "../common/ErrorModal";
import Wrapper from "../helper/Wrapper";

const AddUser = (props) => {
  // const [enteredUserName, setEnteredUserName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    //checking empty value
    if (enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "!! Please Enter a Valid Name and Age (nom empty...)!!",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "!! Please Enter a Valid Age ( > 0 )!!",
      });
      return;
    }

    //doing something
    props.onAddUser(enteredUserName, enteredAge);

    //Note: For input tag controller : as internal sate is controller by react 
    // setEnteredUserName("");
    // setEnteredAge("");

    //Note: For input tag uncontroller input internal sate is not control by react as we are using manage ref 
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const UserNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const AgeChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={UserNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={AgeChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
