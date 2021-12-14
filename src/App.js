import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.pages';
import { Todo } from './pages/player.pages';

const App = () => {
    // username, email, experience, dan lvl.
  const [todos, setTodos] = useState([
    {
      id: 1,
      username: 'saeful',
      email: 'saeful@email.com',
      experience: 5000,
      lvl: 1
    },
    {
      id: 2,
      username: 'indra',
      email: 'indra@email.com',
      experience: 5000,
      lvl: 1
    }
  ])
  const [tmpTodo, setTmpTodo] = useState({
    username: '',
    email: '',
    experience: '',
    lvl: ''
  })

  const onCreate = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        username: tmpTodo.username,
        email: tmpTodo.email,
        experience: tmpTodo.experience,
        lvl: tmpTodo.lvl
      }
    ])
    setTmpTodo({
      username: '',
      email: '',
      experience: '',
      lvl: ''
    })
  }

  const onDelete = (id) => (e) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  
  const onSearch = (id) => (e) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home todos={todos} onDelete={onDelete} />} />
        <Route path="/players" element={<Todo onCreate={onCreate} setTmpTodo={setTmpTodo} tmpTodo={tmpTodo} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
