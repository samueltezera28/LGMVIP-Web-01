import React from 'react'
import{RiCloseCircleLine} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'

export default function Todo({todos, completeTask, removeTask}) {


  return todos.map((todo,index)=>(
    <div className= {todo.iscomplete ? 'complete task-div' : 'task-div'} key={index}>
        <div className='todo-text'>{todo.text}</div>
        <div className='icons'>
            <TiTick className='tick' onclick={() => {completeTask(todo.id)}}></TiTick>
            <RiCloseCircleLine className='cross' onclick={()=>{removeTask(todo.id)}}></RiCloseCircleLine>
        </div>
    </div>
  ))
  
}
