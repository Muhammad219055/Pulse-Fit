import React from "react";
import BMIFORM from "./BMIFORM";

const BMICalculator = () => {
  return (
    <div className="get-started-bmi-container">
      <div className="text-heading">
        <h1>Great, let's work together to make a better you!</h1>
        <h2>Now the first step is to calculate your BMI.</h2>
      </div>
      <BMIFORM />
    </div>
  );
};

export default BMICalculator;
