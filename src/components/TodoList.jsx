import React, { useContext } from 'react'
import ATodo from './ATodo'
import { useSelector } from 'react-redux';

function TodoList() {
const todos = useSelector((state) => state.todos);
  return (
    <div className='space-y-2'>
        {
           todos.length != 0 ? todos.map((todo)=>{
                return <ATodo key={todo.id} todo={todo}/>
            }) : <h1>Nothing</h1>
        }
    </div>
  )
}

export default TodoList