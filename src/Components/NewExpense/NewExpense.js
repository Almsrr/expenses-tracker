import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

function NewExpense(props) {
  const [hiddenForm, setHiddenForm] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const hiddenFormHandler = () => {
    setHiddenForm(!hiddenForm);
  };

  return (
    <Card className="new-expense">
      <div>
        {hiddenForm && <button onClick={hiddenFormHandler}>Add expense</button>}
        {!hiddenForm && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancelNewExpense={hiddenFormHandler}
          />
        )}
      </div>
    </Card>
  );
}

export default NewExpense;
