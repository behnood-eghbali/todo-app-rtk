import React from 'react'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const Todo = ({ todo }) => {
    return (
        <li>
            <Paper>
                <h3>{todo}</h3>
                <IconButton size="small" color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton size="small" color="primary">
                    <DeleteIcon />
                </IconButton>
                <br />
            </Paper>
        </li>
    )
}

export default Todo
