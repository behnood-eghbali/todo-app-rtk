import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import Grid from '@material-ui/core/Grid'
import Todo from './Todo'

const TodoList = ({ todos }) => {
    return (
        <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
            <ul>
                {todos.map((todo, index) => (
                    <Todo key={index} />
                ))}
            </ul>
        </Grid>
        <Grid item xs={4} />
        </Grid>
    )
}

const selectTodos = state => state.todos
const selectVisibleTodos = createSelector(
    [selectTodos], (todos) => {
        console.log([selectTodos], (todos))
    }
)

const mapStateToProps = (state) => ({
    todos: selectVisibleTodos(state)
})

export default connect(mapStateToProps, null)(TodoList)

