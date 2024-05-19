import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  // const [userInput,setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount:'',
  //   enteredDate:''
  // });
  // const titleChangeHandler=(event)=>{
  //   setUserInput((prevState)=>{
  //     return {...prevState,enteredTitle:event.target.value};
  //   });
  // }
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amtChangeHandler = (event) => {
    setEnteredAmt(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amt: +enteredAmt,
      date: new Date(enteredDate),
      id: Math.random(),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };
  const hide = () => {
    props.onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="main">
        <div className="sub">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="sub">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            max="100000"
            value={enteredAmt}
            onChange={amtChangeHandler}
          ></input>
        </div>
        <div className="sub">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="enter">
        <button type="submit">Submit</button>
        <button onClick={hide}>Cancel</button>
      </div>
    </form>
  );
};

export default Form;
