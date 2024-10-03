import React,{useContext, useState} from 'react'
import { BMIContext } from '../context/BMIContext'
const WorkoutPlan = () => {
    const {workoutDayPlan} = useContext(BMIContext);
  return (
    <div
    className='workout-plan'
    >
      <h1>Workout Plan</h1>
    
    </div>
  )
}

export default WorkoutPlan
