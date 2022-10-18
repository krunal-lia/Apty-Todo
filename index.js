const express = require('express')
const { todoStates, getAllStates } = require('./constants/app')
const { putTodo, getTodo, getAll, getAllTodos } = require('./db/app')

const app = express()
const port = 3000

app.use(express.json()) // body parsing

app.get('/ping', (req, res) => {
  res.end('pong')
})

/* 
  1. To start
  2. In progress
  3. Done
  4. Backlog
*/

app.post('/todo/create', (req, res) => {
  const { title, state, description } = req.body

  if (!title || !description) {
    res.status(400)
    res.json({
      message: "Please send required fields"
    })
    return
  }

  const todo = {
    title, 
    state: todoStates[state] || todoStates.TO_START,
    description
  }
  
  const id = putTodo(todo)
  res.status(200)
  res.json({
    message: "Todo added!",
    id
  })
})

app.get('/todo/:id', (req, res) => {
  const todoId = req.params.id

  const todo = getTodo(todoId)
  if (todo) {
    res.status(200)
    res.json(todo)
    return
  }
  res.status(404)
  res.json({
    message: 'Todo not found'
  })
})

app.get('/todo/all', (req, res) => {
  const todos = getAllTodos()
  res.status(200)
  res.json(todos)
})

app.get('/todo/states', (req, res) => {
  const states = getAllStates()
  res.status(200)
  res.json(states)
})


// 1. editing the todo. for ex: changing state, description, title
// 2. To get todos based on the state for ex: getting all todos that are in progress
// 3. delete a todo

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})