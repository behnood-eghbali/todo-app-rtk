import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './todosSlice'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'

const mapDispatch = { addTodo }

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const onChange = e => setTodoText(e.target.value)

  return (
    <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
            <Paper>
                <h2>Redux Toolkit</h2>
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    if (!todoText.trim()) {
                      return
                    }
                    addTodo(todoText)
                    setTodoText('')
                  }}
                >
                    <TextField 
                    id="filled-secondary"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AddCircleRoundedIcon color="secondary" />
                            </InputAdornment>
                        ),
                    }}
                    label="Add Todo"
                    variant="outlined"
                    color="secondary"
                    onChange={onChange}
                    value={todoText}
                    />
                </form>
                <br />
            </Paper>
        </Grid>
        <Grid item xs={2} />
    </Grid>    
  )
}

export default connect(
  null,
  mapDispatch
)(AddTodo)
