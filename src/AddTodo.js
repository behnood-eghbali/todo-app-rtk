import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './todosSlice'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'

class AddTodo extends Component {
    
    state = { input: '' }

    updateInput = (e) => {
        this.setState({ input: e.target.value })
    }

    handleAddTodo = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.input)
        //this.setState({ input: this.state.input })
        this.setState({ input: '' })
        console.log(this.state.input, this.props.addTodo(this.state.input))
    }
    
    render() {
        return (
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Paper>
                        <h2>Redux Toolkit</h2>
                        <form onSubmit={this.handleAddTodo}>
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
                            onChange={this.updateInput}
                            value={this.state.input}
                            />
                        </form>
                        <br />
                    </Paper>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        )
    }
}

export default connect(null, { addTodo })(AddTodo)

