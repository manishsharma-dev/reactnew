import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
    setIsFormVisible(false);
  };
  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="new-expense">
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={hideForm}
        />
      )}
      {!isFormVisible && <button onClick={showForm}>Add New Expense</button>}
    </div>
  );
}
