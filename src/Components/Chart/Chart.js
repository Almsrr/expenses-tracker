import React from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPoints = props.dataPoints;
  const dataPointsValues = dataPoints.map((point) => point.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
        />
      ))}
    </div>
  );
}

export default Chart;
