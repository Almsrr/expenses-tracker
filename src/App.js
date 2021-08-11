import React, { useState } from "react";
import "./styles/scss/main.scss";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";

const data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Auto insurance",
    amount: 250.98,
    date: new Date(2022, 1, 1),
  },
  {
    id: "e6",
    title: "Health insurance",
    amount: 150.02,
    date: new Date(2022, 3, 30),
  },
  {
    id: "e7",
    title: "Child care",
    amount: 76.1,
    date: new Date(2022, 8, 15),
  },
  {
    id: "e8",
    title: "Home decor",
    amount: 578.54,
    date: new Date(2021, 12, 3),
  },
  {
    id: "e9",
    title: "Credit card payments",
    amount: 1200.43,
    date: new Date(2021, 8, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(data);

  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <NewExpense onAddExpense={AddExpenseHandler} />
        <Expenses items={expenses} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
