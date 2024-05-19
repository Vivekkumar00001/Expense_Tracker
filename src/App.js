import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import New from "./NewExpense/NewExpense";
function App() {
  const dummy_expense = [
    // { id: "e1", title: "abc", amt: 100, date: new Date(2021, 2, 12) },
    // { id: "e2", title: "asdfc", amt: 13939, date: new Date(2021, 5, 12) },
  ];
  const [expenses, setExpenses] = useState(dummy_expense);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses(expenses.concat(expense));
    // setExpenses((prevExpenses) => {
    //   // console.log(expense);
    //   return [expense, ...prevExpenses];
    // });
  };
  // const [help, setHelp] = useState(expenses);
  // const change = (Data) => {
  //   console.log(Data);
  //   expenses.map((obj) => {
  //     console.log(obj);
  //     if (obj.id === Data) {
  //       let xyz = [
  //         {
  //           title: "changed",
  //           id: obj.id,
  //           amt: obj.amt,
  //           date: obj.date,
  //         },
  //       ];
  //       setHelp(help.concat(xyz));
  //     } else {
  //       setHelp(help.concat(obj));
  //     }
  //   }, setExpenses(help));
  // };
  const change = (id, abc) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses];
      const index = updatedExpenses.findIndex((e) => e.id === id);
      if (index !== -1) {
        updatedExpenses[index] = {
          ...updatedExpenses[index],
          title: abc,
        };
      }
      return updatedExpenses;
    });
  };
  return (
    <div className="App">
      <New onAddExpense={addExpenseHandler}></New>
      <Expenses items={expenses} onChangeExpense={change}></Expenses>
    </div>
  );
}

export default App;
