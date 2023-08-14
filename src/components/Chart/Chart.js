import ChartBar from "./ChartBar";

import "./Chart.css";
export default function Chart(props) {
  const chartValues = props.dataPoints.map((point) => point.value);
  const totalMaximun = Math.max(...chartValues);
 console.log(totalMaximun);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
