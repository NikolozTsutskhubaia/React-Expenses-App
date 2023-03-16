import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function clickHandler() {
    setShowForm(true);
  }

  function cancelHandler() {
    setShowForm(false);
  }

  if (showForm === false) {
    return (
      <div className="new-expense">
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );
}

export default NewExpense;
