import "./ChartBar.css";
export default function ChartBar(props) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
