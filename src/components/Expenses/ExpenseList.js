import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.js";

function ExpenseList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
