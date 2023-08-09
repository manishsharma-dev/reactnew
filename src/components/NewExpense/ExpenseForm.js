import React from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input
            type="date"
            name="title"
            id="title"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
