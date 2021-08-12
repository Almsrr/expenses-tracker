import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  const expenses = props.items;

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses not found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
