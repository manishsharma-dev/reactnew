import {  useReducer } from "react";

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case "BLUR":
      return {
        value: state.value,
        isTouched: true,
      };
    default:
        return DEFAULT_STATE;
  }  
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, DEFAULT_STATE);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

const DEFAULT_STATE = {
  value: "",
  isTouched: false,
};
