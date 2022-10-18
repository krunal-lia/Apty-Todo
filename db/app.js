const { v4: uuidv4 } = require('uuid');

const todos = {

}

const getTodo = (key) => {
  if(todos[key]) {
    return todos[key]
  } else {
    return null
  }
}

const putTodo = (todo) => {
  const key = uuidv4();
  todos[key] = todo;
  return key
}

const getAllTodos = () => {
  return todos
}

module.exports = {
  getTodo,
  putTodo,
  getAllTodos
}