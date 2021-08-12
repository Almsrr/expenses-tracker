import React, { useState } from "react";

function ExpenseForm(props) {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeTitleHandler = (event) => {
    // Approach 1
    setEnteredTitle(event.target.value);
    // Approach 2
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // Approach 3 {Recommended if you depende of the previous states}
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  // const formatDate = (inputDate) => {
  //   const inputDateArray = inputDate.split("-");
  //   const inputDateArrayNumbers = inputDateArray.map((element) =>
  //     Number(element)
  //   );

  //   return new Date(...inputDateArrayNumbers);
  // };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount) || 0,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  // const [hiddenForm, setHiddenForm] = useState(true);

  // const hiddenFormHandler = () => {
  //   setHiddenForm(!hiddenForm);
  // };

  // if (hiddenForm) {
  //   return (
  //     <div>
  //       <button onClick={hiddenFormHandler}>Add new expense</button>
  //     </div>
  //   );
  // }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={changeTitleHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={changeAmountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={changeDateHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancelNewExpense}>Cancel</button>
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
