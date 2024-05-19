import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "short" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="day">{day}</div>
      <div className="mon">{month}</div>
      <div className="yr">{year}</div>
    </div>
  );
}

export default ExpenseDate;
