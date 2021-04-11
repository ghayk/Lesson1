import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import ucFirst from '../helpers/ucFirst'
import { searchTasksThunk } from '../Redux/actions'
import {
  SET_INPUT_VALUE,
  SET_DROP_DOWN_VALUE,
  SET_DATE,
  RESET_ALL,
} from '../Redux/actionTypes'

function Search(props) {
  const {
    //foo
    SET_DROP_DOWN_VALUE,
    SET_INPUT_VALUE,
    SET_DATE,
    searchTasks,
    RESET_ALL,
    //state
    ...state
  } = props
  const {
    search,
    status,
    sort,
    create_lte,
    create_gte,
    complete_lte,
    complete_gte,
  } = state
  const handleSearchTasks = () => {
    const queryData = {}

    for (let key in state) {
      if (state[key]) {
        queryData[key] =
          typeof state[key] === 'object'
            ? state[key].toISOString().slice(0, 10)
            : state[key]
      }
    }
    searchTasks(queryData)
  }
  return (
    <div className="conSearch" style={{}}>
      <div>
        <span>Search</span>
        <Form.Control
          name="title"
          type="text"
          value={search}
          onChange={(e) => SET_INPUT_VALUE(e.target.value)}
        />
      </div>
      <div>
        <span>Sort</span>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <DropdownButton
            variant="outline-primary"
            id="dropdown-baic-button"
            title={!!!status ? 'Status' : ucFirst(status)}
          >
            <Dropdown.Item
              onClick={() => SET_DROP_DOWN_VALUE('done', 'status')}
            >
              Done
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => SET_DROP_DOWN_VALUE('active', 'status')}
            >
              Active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => SET_DROP_DOWN_VALUE('', 'status')}>
              Reset
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            variant="outline-primary"
            id="dropdown-basic-button"
            title={!!!sort ? 'Sort' : ucFirst(sort.replaceAll('_', ' '))}
          >
            <Dropdown.Item onClick={() => SET_DROP_DOWN_VALUE('a-z', 'sort')}>
              A-Z
            </Dropdown.Item>
            <Dropdown.Item onClick={() => SET_DROP_DOWN_VALUE('z-a', 'sort')}>
              Z-A
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                SET_DROP_DOWN_VALUE('creation_date_oldest', 'sort')
              }
            >
              creation_date_oldest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                SET_DROP_DOWN_VALUE('creation_date_newest', 'sort')
              }
            >
              creation_date_newest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                SET_DROP_DOWN_VALUE('completion_date_oldest', 'sort')
              }
            >
              completion_date_oldest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                SET_DROP_DOWN_VALUE('completion_date_newest', 'sort')
              }
            >
              completion_date_newest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => SET_DROP_DOWN_VALUE('', 'sort')}>
              Reset
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div>
        <span>Filter</span>
        <div>
          <DatePicker
            className="p-1"
            placeholderText="create lte"
            selected={create_lte}
            onChange={(date) => SET_DATE(date, 'create_lte')}
          />
          <DatePicker
            className="p-1"
            placeholderText="create gte"
            selected={create_gte}
            onChange={(date) => SET_DATE(date, 'create_gte')}
          />
          <DatePicker
            className="p-1"
            placeholderText="complete lte"
            selected={complete_lte}
            onChange={(date) => SET_DATE(date, 'complete_lte')}
          />
          <DatePicker
            className="p-1"
            placeholderText="complete gte"
            selected={complete_gte}
            onChange={(date) => SET_DATE(date, 'complete_gte')}
          />
        </div>
      </div>
      <div style={{ margin: '5px auto' }}>
        <Button
          variant="outline-primary"
          className="mr-3"
          onClick={handleSearchTasks}
        >
          Search
        </Button>
        <Button variant="outline-success" onClick={RESET_ALL}>
          Reset
        </Button>
      </div>
    </div>
  )
}
const SearchProvider = connect(
  (state) => {
    const {
      search,
      status,
      sort,
      create_lte,
      create_gte,
      complete_lte,
      complete_gte,
    } = state.searchState
    return {
      search,
      status,
      sort,
      create_lte,
      create_gte,
      complete_lte,
      complete_gte,
    }
  },
  (dispatch) => {
    return {
      SET_DROP_DOWN_VALUE: (value, dropDownType) =>
        dispatch({
          type: SET_DROP_DOWN_VALUE,
          value,
          dropDownType,
        }),
      SET_INPUT_VALUE: (value) => dispatch({ type: SET_INPUT_VALUE, value }),
      SET_DATE: (date, dateType) =>
        dispatch({ type: SET_DATE, date, dateType }),
      searchTasks: (queryData) => dispatch(searchTasksThunk(queryData)),
      RESET_ALL: () => dispatch({ type: RESET_ALL }),
    }
  }
)(Search)

export default SearchProvider
