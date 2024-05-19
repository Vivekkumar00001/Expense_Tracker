import ChartBar from "./ChartBar";
import "./chart.css";
const Chart = (props) => {
  const dataValue = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...dataValue);
  //   console.log("hlo");
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
