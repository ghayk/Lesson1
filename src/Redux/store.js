import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import todoReducer from './reducers/todoReducer'

const middlewares = [thunk, logger]
const reducers = combineReducers({
  todoState: todoReducer,
})
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
