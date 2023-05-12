import React from "react";
import ReactEcharts from "echarts-for-react";
const Chart = () => {
  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: { color: "blue" },
          },
          {
            value: 200,
            itemStyle: { color: "red" },
          },
          {
            value: 150,
            itemStyle: { color: "green" },
          },
          {
            value: 150,
            itemStyle: { color: "blue" },
          },
          {
            value: 150,
            itemStyle: { color: "red" },
          },
          {
            value: 150,
            itemStyle: { color: "green" },
          },
        ],
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      <ReactEcharts
        option={options}
        style={{ width: "600px", height: "300px" }}
      ></ReactEcharts>
    </div>
  );
};

export default Chart;
