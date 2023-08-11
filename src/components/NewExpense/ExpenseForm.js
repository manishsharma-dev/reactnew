import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={titleChangeHandler} />
          {title}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
          {amount}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="title"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
          {date.toString()}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
