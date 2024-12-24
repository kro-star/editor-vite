import { configureStore } from '@reduxjs/toolkit'
import { TaskReducer } from './TaskReducer'

const store = configureStore({ reducer:  TaskReducer})

console.log(store.getState())


