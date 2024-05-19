import React, { useState } from "react";
import Form from "./Form.js";
import "./NewExpense.css";

const New = (props) => {
  const [active, setActive] = useState(false);
  const form = () => {
    setActive(!active);
  };
  const saveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setActive(!active);
  };
  if (active === false) {
    return (
      <div className="New">
        <button onClick={form}>Add New Expense</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="New">
          <Form onSaveExpenseData={saveHandler} onCancel={form}></Form>
        </div>
      </div>
    );
  }
};
export default New;
