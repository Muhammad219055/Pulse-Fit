import React, { useState } from "react";
import BMIresult from "./BMI-result";
import {motion} from 'framer-motion'

const BMIFORM = () => {
  const [resultShouldAppear, setResultShouldAppear] = useState(false);
  const [weightUnit, setWeightUnit] = useState("KG");
  const [heightUnit, setHeightUnit] = useState("CM");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cmHeight, setCmHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmiData, setBmiData] = useState({ height: "", weight: "", age: "" });

  function handleUnitChange(e, type) {
    e.preventDefault();
    if (type === "weight") {
      setWeightUnit(e.target.textContent);
    } else if (type === "height") {
      setHeightUnit(e.target.textContent);
    }
  }

  function calculateBMI(e) {
    e.preventDefault();
    const height = heightUnit === "Feet" ? { feet, inches } : cmHeight;
    setBmiData({
      height: height,
      weight: weight,
      age: age,
    });
    setResultShouldAppear(true);
  }

  return (
    <div className="bmi-form-and-result">
      <form className="bmi-calculator">
        <span>
          <label htmlFor="Age">Age:</label>
          <input
            type="text"
            name="Age"
            placeholder="Your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </span>

        <span>
          <label htmlFor="Height">Height:</label>
          <div className="units">
            {heightUnit === "Feet" ? (
              <div className="height-feet-inches">
                <input
                  type="text"
                  name="Feet"
                  placeholder="Feet"
                  id="Feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                />
                <input
                  type="text"
                  name="Inches"
                  placeholder="Inches"
                  id="Inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                />
              </div>
            ) : (
              <input
                type="text"
                name="Height"
                placeholder="Height in CM"
                id="height-cm"
                value={cmHeight}
                onChange={(e) => setCmHeight(e.target.value)}
              />
            )}
            <button
              onClick={(e) => handleUnitChange(e, "height")}
              className={`ft-selector ${
                heightUnit === "Feet" ? "active-unit" : ""
              }`}
            >
              Feet
            </button>
            <button
              onClick={(e) => handleUnitChange(e, "height")}
              className={`cm-selector ${
                heightUnit === "CM" ? "active-unit" : ""
              }`}
            >
              CM
            </button>
          </div>
        </span>

        <span>
          <label htmlFor="Weight">Weight:</label>
          <div className="units">
            <input
              type="text"
              name="Weight"
              id="Weight"
              placeholder={`Weight in ${weightUnit}`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <button
              onClick={(e) => handleUnitChange(e, "weight")}
              className={`kg-selector ${
                weightUnit === "KG" ? "active-unit" : ""
              }`}
            >
              KG
            </button>
            <button
              onClick={(e) => handleUnitChange(e, "weight")}
              className={`lbs-selector ${
                weightUnit === "lbs" ? "active-unit" : ""
              }`}
            >
              lbs
            </button>
          </div>
        </span>

        <button className="calculate-bmi" onClick={calculateBMI}>
          Calculate
        </button>
      </form>

      {resultShouldAppear && (
        <motion.div 
        initial={{y:-100, opacity:0}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.3}}
        className="bmi-result-container">
          <BMIresult
            bmiData={bmiData}
            weightUnit={weightUnit}
            heightUnit={heightUnit}
          />
        </motion.div>
      )}
    </div>
  );
};

export default BMIFORM;
