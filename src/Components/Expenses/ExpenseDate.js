import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
      <p className="expense-date__day">{day}</p>
    </div>
  );
}

export default ExpenseDate;
