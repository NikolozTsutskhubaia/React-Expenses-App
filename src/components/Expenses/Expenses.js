import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [expenseFilterYear, setExpenseFilterYear] = useState("2020");

  function filterSaveHandler(filterYear) {
    console.log(filterYear);
    setExpenseFilterYear(filterYear);
  }

  const filteredExpenses = props.items.filter(
    (title) => title.date.getFullYear().toString() === expenseFilterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={expenseFilterYear}
        onSaveFilterYear={filterSaveHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
