import "./chartbar.css";

const ChartBar = (data) => {
  let barFillHeight = "0%";
  if (data.maxValue > 0) {
    barFillHeight = Math.round((data.value / data.maxValue) * 100) + "%";
  }
  return (
    <div className="chartBar">
      <div className="chartBar_label">{data.label}</div>
      <div className="chartBar_inner">
        <div className="chartBar_fill" style={{ height: barFillHeight }}></div>
      </div>
    </div>
  );
};
export default ChartBar;
