import "./App.css";
import React, { useState } from "react";
import AddList from './components/addlist.js'
import Todolist from './components/todolist.js'

function App() {
  const list = [
    {
      todoname:"Task 1",
    },
    {
      todoname:"Task 2",
    },
    {
      todoname:"Task 3",
    }
  ]
  const [lists , setLists] = useState(list);
  const Deletetodo = (index) =>{
    let newTodolist = [...lists];
    newTodolist.splice(index,1);
    setLists(newTodolist);
  }
  const Addtodo = (todoname) =>{
    let newTodolist = [...lists];
    newTodolist.push({
      todoname:todoname,
    })
    setLists(newTodolist);
  }
  
  return (
    <>
    <main className="container">
      <h1 className="text-center">To Do List</h1>
      <hr className="border-2"/>
      <AddList Addtodo={Addtodo}/>
      <Todolist list={lists} Deletetodo={Deletetodo}/>
    </main>
    </>
  );
}

export default App;
