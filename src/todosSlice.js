import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const { id, todo } = action.payload
            state.push({ id, todo })
        }
    }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer