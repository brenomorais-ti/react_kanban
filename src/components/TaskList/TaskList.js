import React from "react";
import './tasklist.css';
import { useState } from "react";

function TaskList( { title, onAddTask, tasks } ) {

    const addTask = () => {
        console.log("executando de addTask")
        onAddTask('Nova Tarefa', 'Pendente');
    }
 
    return(
        <div className="tasklist">
            <div className="title">{ title }</div>
            <div className="content">
                {tasks.map((task) => {
                    return <div key={task.id}> {task.title} </div>
                })}
            </div>
            <button onClick={addTask}>Incremento</button>
            

        </div>
    );
}

export default TaskList;
