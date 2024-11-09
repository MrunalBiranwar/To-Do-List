import React,{useState} from 'react'

export default function List(props) {
  return (
    <div className='row my-2 border py-4 bg-body-secondary align-items-start'>
      <div className='col-10'>
        {props.list.todoname}
      </div>
      <div className="col-2">
        <button className='btn btn-danger px-4' onClick={() =>{
            props.Deletetodo(props.index);
        }}>Delete</button>
      </div>
    </div>
  )
}
