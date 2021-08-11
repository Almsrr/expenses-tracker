import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [userFilter, setUserFilter] = useState("2021");

  const filterHandler = (year) => {
    setUserFilter(year);
  };

  const currentExpenses = props.items;
  const filteredExpenses = currentExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === userFilter;
  });

  return (
    <div className="expenses">
      <ExpensesFilter defaultFilter={userFilter} onFilter={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <div className="expenses-container">
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
