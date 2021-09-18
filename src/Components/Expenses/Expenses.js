import React, { useState, useMemo } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [userFilter, setUserFilter] = useState("2021");
  const expenses = props.items;

  const filterHandler = (year) => {
    setUserFilter(year);
  };

  const filteredExpenses = useMemo(() => {
    // console.log("items filtered");
    return expenses.filter(
      (expense) => expense.date.getFullYear().toString() === userFilter
    );
  }, [expenses, userFilter]);

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
