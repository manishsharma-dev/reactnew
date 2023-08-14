import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredyear, setFilteredYear] = useState("2023");
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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
