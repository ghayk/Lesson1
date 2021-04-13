import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import todoReducer from './reducers/todoReducer'
import singleTaskReducer from './reducers/singleTaskReducer'
import searchReducer from './reducers/searchReducer'
import contactReducer from './reducers/contactReducer'
import globalReducer from './reducers/globalReducer'

const middlewares = [thunk, logger]
const reducers = combineReducers({
  todoState: todoReducer,
  singleTaskState: singleTaskReducer,
  searchState: searchReducer,
  contactState: contactReducer,
  globalState: globalReducer,
})
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
