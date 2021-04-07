import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import todoReducer from './reducers/todoReducer'
import singleTaskReducer from './reducers/singleTaskReducer'

const middlewares = [thunk, logger]
const reducers = combineReducers({
  todoState: todoReducer,
  singleTaskState: singleTaskReducer,
})
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
