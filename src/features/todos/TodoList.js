import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Grid from '@material-ui/core/Grid'

const TodoList = ({ todos, toggleTodo }) => (
  <Grid container>
    <Grid item xs={4} />
    <Grid item xs={4}>
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo({ id: todo.id })}
          />
        ))}
      </ul>
    </Grid>
    <Grid item xs={4} />
  </Grid>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
