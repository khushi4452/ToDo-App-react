import React from 'react'
import "./TaskCard.css";

import deleteIcon from './delete.png';

function TaskCard({ title, category, delFunction, index }) {
  return (
    <div className='bg-body-secondary rounded-4 my-3 py-2 px-3 d-flex align-items-center shadow-sm '>
     
     <div className='w-100 d-flex justify-content-between align-items-center position-relative'>
     <h4>{title}</h4><span className='category-p position-absolute bg-dark-subtle rounded-pill text-center'>{category}</span>
    <img src={deleteIcon} alt='add' className='del-icon bg-dark-subtle rounded-circle p-1' onClick={() => {
     delFunction(index)
     }} />
      </div>
    </div>
  )
}

export default TaskCard