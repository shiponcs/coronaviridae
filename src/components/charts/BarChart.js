import React from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["Recovered", "Infected", "Death"],
        datasets: [
          {
            label: ["Recovered", "Infected", "Death"],
            data: [
              this.props.recovered.value,
              this.props.confirmed.value,
              this.props.deaths.value,
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(0, 0, 86, 1)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
    };
  }
  render() {
    return (
      <div key={this.props.lastUpdate}>
        <Bar data={this.state.data} />
      </div>
    );
  }
}

export default BarChart;
