import { useState } from 'react'
import reactLogo from "./assets/react.svg"
import './App.css'

function App() {
  const [task,settask] = useState([]);
  const [formState,setformState] = useState({
    taskname :"",
    isCompleted :false,
    assignedTo : ""
})

function handleChange(event) {

  let passed = event.target.type === "checkbox" ? event.target.checked : event.target.value; 


  let newFormstate = {
    ...formState,

    [event.target.name] : passed,
  };
  setformState(newFormstate)
  
}

function handleSubmit(event){
  event.preventDefault();
   let newTask = {
      ...formState,
   }
   let updatedState = [...task,newTask];
     settask(updatedState);
   setformState({
       taskname : "",
       isCompleted : false,
       assignedTo : ""
   })
}


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="taskname" value={formState.taskname} placeholder="add todo here" onChange={handleChange}/>
        <input type="checkbox" name="isCompleted" value={formState.isCompleted} onChange={handleChange}/>
         <select name="assignedTo" id="options" value={formState.assignedTo} onChange={handleChange}>
          <option value="select">Select</option>
          <option value="do">Do</option>
          <option value="done">Done</option>
         </select>
         <button>Add</button>
        </form>
        </div>  
        <hr />
        <div id='render-data'>
        <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>completed</th>
          <th>Assign-To</th>
          <th>Delete</th>
        </tr>
      </thead>
    {task.map((ele)=>
           <tbody key={ele}>
           <tr key={ele}>
             <td key={ele}>{ele.taskname}</td>
             <td>{ele.isCompleted}</td>
             <td>{ele.assignedTo}</td>
             <button onClick={handleClick}>Delete</button>
           </tr>
         </tbody>
        )}
    </table>
   </div>
    </>
  )
}

export default App
