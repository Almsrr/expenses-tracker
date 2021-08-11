import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="description">
          <h2 className="title">{props.title}</h2>
          <p className="price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
