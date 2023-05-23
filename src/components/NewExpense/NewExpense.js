import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const [expenseFormView, setExpenseFormView] = useState(false);

  const showExpenseForm = () => {
    setExpenseFormView(!expenseFormView);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {expenseFormView ? (
        <ExpenseForm
          setExpenseFormView={setExpenseFormView}
          onSaveExpenseData={saveExpenseDataHandler}
          showExpenseForm={showExpenseForm}
        />
      ) : (
        <AddNewExpense
          setExpenseFormView={setExpenseFormView}
          expenseFormView={expenseFormView}
          showExpenseForm={showExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
