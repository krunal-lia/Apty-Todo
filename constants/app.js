const todoStates = {
  TO_START: 'toStart',
  IN_PROGRESS: 'inProgress',
  DONE: 'done',
  BACK_LOG: 'backLog'
}

const getAllStates = () => {
  const states = Object.keys(todoStates)
  return states
}

module.exports = {
  todoStates,
  getAllStates
}