import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut, Pie } from "react-chartjs-2";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import MenuBookIcon from "@mui/icons-material/MenuBook";
export const data = {
  labels: [
    "Course HTML CSS",
    "Course JS",
    "Course Reactjs",
    "Course PHP",
    "Course Laravel",
    "Course NodeJS",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [190, 140, 100, 50, 20, 110],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};
export const data2 = {
  labels: [
    "Sunday",
    "Saturday",
    "Friday",
    "Thursday",
    "Wednesday",
    "Tuesday",
    "Monday",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(52, 45, 113, .2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(52, 45, 113, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
function AdminPanel() {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="mb-4 row justify-content-between text-center">
          <div
            className="col-md-3 rounded"
            style={{ backgroundColor: "#b5d5e1" }}
          >
            <p>
              Total Tales
              <i className="ms-3">
                <LocalOfferIcon />
              </i>
            </p>
            <h3>
              $320,210 <TrendingDownIcon />
            </h3>
          </div>
          <div
            className="col-md-3 rounded"
            style={{ backgroundColor: "#b9e303" }}
          >
            <p>
              Total Profit
              <i className="ms-3">
                <SsidChartIcon />
              </i>
            </p>
            <h3>
              $10,210 <TrendingDownIcon />
            </h3>
          </div>
          <div
            className="col-md-3 rounded"
            style={{ backgroundColor: "#b5d5e1" }}
          >
            <p>
              Total Orders
              <i className="ms-3">
                <MenuBookIcon />
              </i>
            </p>
            <h3>
              610 <TrendingUpIcon />{" "}
            </h3>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-center ">Sales by Course</h2>
          <div className="col-md-12">
            <Doughnut data={data} />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-center">Sales of Course for the week</h2>
          <div className="col-md-12">
            <Pie data={data2} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPanel;
