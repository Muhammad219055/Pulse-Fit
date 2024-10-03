import React, { useContext } from "react";
import { BMIContext } from "../context/BMIContext";
import NavBar from "../components/NavBar";
import BMICalculator from "../components/BMICalculator";
import Footer from "../components/Footer";
import Wrokout from "../components/Wrokout";

const GetStarted = () => {
  const { bmi } = useContext(BMIContext);

  return (
    <div className="get-started-page">
      <NavBar />
      <BMICalculator />
      {/* {bmi !== null && <Wrokout />} */}
      <Footer />
    </div>
  );
};

export default GetStarted;
