import './App.css';

import { Chart } from "react-google-charts";

const options = {
  title: "My daily activities"
};

const data = [
  ["Tasks", "Hours per Day"],
  ["Work", 8],
  ["Learning", 3],
  ["Sport", 1],
  ["Eat", 2],
  ["Sleep", 8]
]

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App;
