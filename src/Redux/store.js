import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import globalReducer from './reducers/globalReducer'
import todoReducer from './reducers/todoReducer'
import singleTaskReducer from './reducers/singleTaskReducer'
import searchReducer from './reducers/searchReducer'
import contactReducer from './reducers/contactReducer'
import taskReducer from './reducers/taskReducer'

const middlewares = [thunk]
const reducers = combineReducers({
  globalState: globalReducer,
  todoState: todoReducer,
  singleTaskState: singleTaskReducer,
  searchState: searchReducer,
  contactState: contactReducer,
  taskState: taskReducer,
})
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
