import React from 'react'

const WorkoutDaysCard = ({days, clas, onClick, clicked}) => {
  return (

      <button
      className={clas}
      onClick={()=>{clicked(days, clas)}}
      >
        {days} days a week
      </button>
  )
}

export default WorkoutDaysCard
