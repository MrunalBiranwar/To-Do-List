import React, { useState } from 'react'

export default function AddList(props) {
    const [inputvalue , setInputValue] = useState("");
    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    }
    const handleAddClick = () =>{
        if (inputvalue.trim()) {
            props.Addtodo(inputvalue);
            setInputValue('');
          }
    }
  return (
    <div className='row'>
      <div className='col-10'>
        <input type="text" name='add' placeholder='Add Items....' className='py-2 px-2 w-100' value={inputvalue} onChange={handleInputChange}/>
      </div>
      <div className="col-2">
        <button className='btn btn-dark w-100' onClick={handleAddClick}>ADD</button>
      </div>
    </div>
  )
}
