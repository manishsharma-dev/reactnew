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
    console.log(filteredyear);
  };
  return (
    <div>          
      <Card className="expenses">
      <ExpensesFilter selectedYear={filteredyear} onChangeFilterHandler={changeFilterHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
