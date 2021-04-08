import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import todoReducer from './reducers/todoReducer'
import singleTaskReducer from './reducers/singleTaskReducer'
import searchReducer from './reducers/searchReducer'

const middlewares = [thunk, logger]
const reducers = combineReducers({
  todoState: todoReducer,
  singleTaskState: singleTaskReducer,
  searchState: searchReducer,
})
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
