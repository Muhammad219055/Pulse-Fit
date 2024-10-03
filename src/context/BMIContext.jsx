import React, { createContext, useState, useCallback } from "react";

export const BMIContext = createContext();

const BMIProvider = ({ children }) => {
  const [bmi, setBmi] = useState(null);
  const [bmiFlag, setBmiFlag] = useState("");
  const [workoutDayPlan, setWorkoutDayPlan] = useState(null)

  const calculateBMI = useCallback((data, weightUnit, heightUnit) => {
    const { height, weight } = data;
    let heightInMeters;

    if (heightUnit === "CM") {
      heightInMeters = height / 100;
    } else if (heightUnit === "Feet") {
      const { feet, inches } = height;
      heightInMeters = feet * 0.3048 + inches * 0.0254;
    }

    let weightInKg;
    if (weightUnit === "KG") {
      weightInKg = weight;
    } else if (weightUnit === "lbs") {
      weightInKg = weight * 0.453592;
    }

    return weightInKg / (heightInMeters * heightInMeters);
  }, []);

  const updateBMI = (data, weightUnit, heightUnit) => {
    const bmiValue = calculateBMI(data, weightUnit, heightUnit);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setBmiFlag("Slightly underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBmiFlag("In a healthy range");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiFlag("Slightly overweight");
    } else {
      setBmiFlag("Above a healthy range");
    }
  };

  return (
    <BMIContext.Provider value={{ bmi, bmiFlag, updateBMI, workoutDayPlan, setWorkoutDayPlan }}>
      {children}
    </BMIContext.Provider>
  );
};

export default BMIProvider;
