import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Filter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
const Expense = (expense) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    // event.preventDefault();
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expense.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const pressHandle = (id, title) => {
    //   //console.log(abc);
    expense.onChangeExpense(id, title);
  };
  return (
    <div className="expenses">
      <Filter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></Filter>
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            id={expenses.id}
            title={expenses.title}
            amt={expenses.amt}
            item={expenses.date}
            onPress={pressHandle}
          ></ExpenseItem>
        ))
      )}
    </div>
  );
};
export default Expense;

// //{/* <ExpenseItem
// item={expense.item[0].date}
// title={expense.item[0].name}
// amt={expense.item[0].amt}
// ></ExpenseItem>
// <ExpenseItem
// item={expense.item[1].date}
// title={expense.item[1].name}
// amt={expense.item[1].amt}
// ></ExpenseItem> */}
