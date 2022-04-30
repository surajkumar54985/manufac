import React from "react";
import ReactEcharts from "echarts-for-react-typescript";

function Chart() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Alcohol1", "Alcohol2", "Alcohol3"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [1.98, 1.8994, 3.33375],
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default Chart;
