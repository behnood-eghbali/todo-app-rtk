import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const Todo = ({ onClick, completed, text }) => (
  <Paper onClick={onClick}>
    <h2 
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </h2>
    <IconButton size="small" color="primary">
      <EditIcon />
    </IconButton>
    <IconButton size="small" color="primary">
      <DeleteIcon />
    </IconButton>
    <br />
  </Paper>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
