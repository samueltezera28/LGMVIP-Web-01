import React from 'react'
import { useState } from 'react';

import TodoForm from './TodoForms';
import Todo from './Todo';


export default function TodoList() {

    //state Array which hold all todo
    const [todos, setTodos] = useState([]);

    const addTask = task => {
        if(!task.text){
            return
        }

        const newTodos = [task,...todos];
        setTodos(newTodos);
    }

    //remove todo from list
    const removeTask = id =>{
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }


    //task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }
  return (
    <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask ={completeTask} removeTask={removeTask}></Todo>
    </div>
  )
}
