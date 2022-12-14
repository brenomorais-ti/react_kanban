import React, { useState } from "react";
import "./styles.css"
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

function App() {
  let idAcc = 0;
  const generateId = () => {
    idAcc = idAcc + 1;
    return idAcc;
  }

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTask) => {
      console.log("executando de setTaskList")
      return [... existingTask, newTask];
    });
  };

  return (
    <div className="App">
      
      <Navbar />

      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks}/>
      </div>      
    </div>
  );
}
export default App;
