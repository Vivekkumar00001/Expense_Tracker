import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  // console.log(props.title);
  // const [title, setTitle] = useState(props.title);
  // const expenseDate = new Date(2021, 2, 20);
  // const title = "abc";
  // const amount = 1234;
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: props.title,
  //   enteredAmount: props.amt,
  //   enteredDate: props.item,
  //   enteredId: props.id,
  // });
  const click = () => {
    console.log(props);
    // props.setExpenses((prev) => {
    //   console.log(prev);
    //   return prev;
    // });
    if (props.title !== "changed") {
      props.onPress(props.id, "changed");
    }
  };

  return (
    <div>
      <div id="all">
        <div className="item">
          <ExpenseDate date={props.item}></ExpenseDate>
        </div>
        <div className="detail">
          <h2 className="description">{props.title}</h2>
          <div className="amt">${props.amt}</div>
        </div>
        <button id={props.id} onClick={click}>
          change title
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
