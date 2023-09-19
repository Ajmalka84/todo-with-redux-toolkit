import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { completedTodo, deleteTodo } from '../reducers/TodoReducer'

function ATodo({todo }) {
  const disptch =  useDispatch()
  const handleToggle = ()=>{
     disptch(completedTodo(todo.id))
  }
  const deletedTodo = ()=>{
     disptch(deleteTodo(todo.id))
  }

  return (
    <div className='flex items-center justify-between bg-yellow-50 p-4 rounded-lg' onClick={handleToggle}>
        <h1>{todo.todo}</h1>
        <button className="bg-red-500 text-white p-2 rounded-lg font-semibold border-2 border-red-700 hover:bg-red-600 text-sm" onClick={deletedTodo}>Delete</button>
    </div>
  )
}

export default ATodo

