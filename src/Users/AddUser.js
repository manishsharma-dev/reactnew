import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(DEFAULT_INPUT_STATE);
  const [dialogContent, setDialogContent] = useState(DEFAULT_DIALOG_STATE);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setDialogContent({
        title: "Invalid Input",
        message: "Please enter a valid username and age (non -empty values)",
      });
      return;
    }
    if (isNaN(userInput.age.trim()) || +userInput.age < 1) {
      setDialogContent({
        title: "Invalid Age",
        message: "Please enter a valid age (valid positive number)",
      });
      return;
    }
    setDialogContent(DEFAULT_DIALOG_STATE);
    props.onFetchUserData(userInput);
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
    <div>
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
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={userInput.age || ""}
              onChange={(event) => onInputHandler("age", event.target.value)}
            />
            <Button type="submit" onClick={addUserHandler}>
              Add User
            </Button>
          </form>
        </Card>
      )}
    </div>
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
