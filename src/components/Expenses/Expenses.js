import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredyear, setFilteredYear] = useState("");
  const expenses = props.expenses;
  const changeFilterHandler = (data) => {
    setFilteredYear(data);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredyear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredyear}
          onChangeFilterHandler={changeFilterHandler}
        />
        {filteredExpenses.length === 0 && <p>No Expenses Found </p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
