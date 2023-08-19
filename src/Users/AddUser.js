import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [userInput, setUserInput] = useState(DEFAULT_INPUT_STATE);
  const [dialogContent, setDialogContent] = useState(DEFAULT_DIALOG_STATE);
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = usernameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setDialogContent({
        title: "Invalid Input",
        message: "Please enter a valid username and age (non -empty values)",
      });
      return;
    }
    if (isNaN(enteredAge.trim()) || +enteredAge < 1) {
      setDialogContent({
        title: "Invalid Age",
        message: "Please enter a valid age (valid positive number)",
      });
      return;
    }
    setUserInput({
      username: enteredName,
      age: enteredAge
  })
    setDialogContent(DEFAULT_DIALOG_STATE);
    props.onFetchUserData(userInput);
    enteredName.current.value = '';
    enteredAge.current.value = '';
    setUserInput(DEFAULT_INPUT_STATE);
  };
  const onInputHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };
  const closeModal = () => {
    setDialogContent(DEFAULT_DIALOG_STATE);
  };
  return (
    <Wrapper>
      {dialogContent.title && (
        <ErrorModal
          title={dialogContent.title}
          message={dialogContent.message}
          onClose={closeModal}
        />
      )}
      {!dialogContent.title && (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={userInput.username || ""}
              onChange={(event) =>
                onInputHandler("username", event.target.value)
              }
              ref={usernameRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={userInput.age || ""}
              onChange={(event) => onInputHandler("age", event.target.value)}
              ref={ageRef}
            />
            <Button type="submit" onClick={addUserHandler}>
              Add User
            </Button>
          </form>
        </Card>
      )}
    </Wrapper>
  );
};

export default AddUser;

const DEFAULT_INPUT_STATE = {
  username: "",
  age: "",
};

const DEFAULT_DIALOG_STATE = {
  title: "",
  message: "",
};
