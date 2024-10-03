import React, {useContext, useState} from "react";
import WorkoutDaysCard from "./WorkoutDaysCard";
import { BMIContext } from "../context/BMIContext";

const Wrokout = () => {
    const {workoutDayPlan, setWorkoutDayPlan} = useContext(BMIContext);
    const [selectedOption, setSelectedOption] = useState('')
    function onWrokoutPlanSelection(selected, clickedOption){
        setWorkoutDayPlan(selected)
        setSelectedOption(clickedOption)
    }
    
  return (
    <div className="workout-intro">
      <h2>
        Now the next step in our journey is your personalized workout schedule.
      </h2>
      <p>Chose the preferred schedule from below</p>
      <div className="workout-days-grid">
        <WorkoutDaysCard
        clicked={onWrokoutPlanSelection}
        clas='option1' days={3} />
        <WorkoutDaysCard 
        clicked = {onWrokoutPlanSelection}
        clas='option2' days={4} />
        <WorkoutDaysCard 
        clicked = {onWrokoutPlanSelection}
        clas='option3' days={5} />
        <WorkoutDaysCard 
        clicked = {onWrokoutPlanSelection}
        clas='option4' days={6} />
      </div>


    </div>
  );
};

export default Wrokout;
