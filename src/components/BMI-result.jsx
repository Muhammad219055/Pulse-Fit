import React, { useContext, useEffect } from "react";
import { BMIContext } from "../context/BMIContext";

const BMIresult = ({ bmiData, weightUnit, heightUnit }) => {
  const { bmi, bmiFlag, updateBMI } = useContext(BMIContext);

  useEffect(() => {
    updateBMI(bmiData, weightUnit, heightUnit);
  }, [bmiData, weightUnit, heightUnit, updateBMI]);
  function fontClass() {
    if (bmiFlag === "Slightly underweight") {
      return "underweight";
    } else if (bmiFlag === "In a healthy range") {
      return "healthy";
    } else if (bmiFlag === "Slightly overweight") {
      return "overweight";
    } else if ("Above a healthy range") {
      return "very-overweight";
    }
  }
  return (
    <div className="bmi-result-text">
      <h1>Your BMI is {bmi}</h1>
      <h4>
        Your BMI indicates that you are{" "}
        <span className={fontClass()}>{bmiFlag}</span>
      </h4>
    </div>
  );
};

export default BMIresult;
