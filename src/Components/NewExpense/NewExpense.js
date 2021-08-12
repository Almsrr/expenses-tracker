import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
// import { v4 as uuidv4 } from "uuid";

function NewExpense(props) {
  const [hiddenForm, setHiddenForm] = useState(true);

  const generateId = () => {
    const uniqueId = "e" + (props.items.length + 1);
    return uniqueId;
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: generateId(), //uuidv4()
    };
    props.onAddExpense(expenseData);
  };

  const hiddenFormHandler = () => {
    setHiddenForm(!hiddenForm);
  };

  let newExpenseContent = (
    <button onClick={hiddenFormHandler}>Add expense</button>
  );
  if (!hiddenForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelNewExpense={hiddenFormHandler}
      />
    );
  }
  return (
    <Card className="new-expense">
      <div>{newExpenseContent}</div>
    </Card>
  );
}

export default NewExpense;
