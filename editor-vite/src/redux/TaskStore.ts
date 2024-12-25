import { configureStore } from '@reduxjs/toolkit'
import  taskReducer from './TaskSlice'

const store = configureStore({reducer: {
    tasks: taskReducer
}})

export default store

//console.log(store.getState())

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']