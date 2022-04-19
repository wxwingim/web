import React from 'react';
import { Chart } from 'react-google-charts';
import './App.css';

export const data = returnData(27);

function returnData(len: number){
  const data: any = [
    ["x", "f(x)"],
  ];
  for (let i = 1; i <= len; i++){
    let coup: [number, number];
    let x = i/10;
    let y = 3*Math.pow(x, 3) - 2*Math.pow(Math.E, (Math.pow(x,3)-2*x*x-1)) + Math.log(x)/Math.log(13);
    coup = [x, y];
    data[i] = coup;
  }

  return data;
}

export const options = {
  curveType: "function",
  legend: {position: "bottom"},
}

function App() {
  return (
    <div className="App">
      <Chart 
        chartType="LineChart"
        width= "100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default App;
