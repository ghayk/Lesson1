import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import ucFirst from '../helpers/ucFirst'
import { searchTasksThunk } from '../Redux/actions'
import {
  setInputValue,
  setDropDownValue,
  setDate,
  resetAll,
} from '../Redux/actionTypes'

function Search(props) {
  const {
    //foo
    setDropDownValue,
    setInputValue,
    setDate,
    searchTasks,
    resetAll,
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
    <div
      style={{
        maxWidth: '400px',
        padding: '10px',
        margin: '10px auto',
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span>Search</span>
        <Form.Control
          name="title"
          type="text"
          value={search}
          onChange={(e) => setInputValue(e.target.value)}
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
            <Dropdown.Item onClick={() => setDropDownValue('done', 'status')}>
              Done
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDropDownValue('active', 'status')}>
              Active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDropDownValue('', 'status')}>
              Reset
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            variant="outline-primary"
            id="dropdown-basic-button"
            title={!!!sort ? 'Sort' : ucFirst(sort.replaceAll('_', ' '))}
          >
            <Dropdown.Item onClick={() => setDropDownValue('a-z', 'sort')}>
              A-Z
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDropDownValue('z-a', 'sort')}>
              Z-A
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setDropDownValue('creation_date_oldest', 'sort')}
            >
              creation_date_oldest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setDropDownValue('creation_date_newest', 'sort')}
            >
              creation_date_newest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setDropDownValue('completion_date_oldest', 'sort')}
            >
              completion_date_oldest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setDropDownValue('completion_date_newest', 'sort')}
            >
              completion_date_newest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDropDownValue('', 'sort')}>
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
            onChange={(date) => setDate(date, 'create_lte')}
          />
          <DatePicker
            className="p-1"
            placeholderText="create gte"
            selected={create_gte}
            onChange={(date) => setDate(date, 'create_gte')}
          />
          <DatePicker
            className="p-1"
            placeholderText="complete lte"
            selected={complete_lte}
            onChange={(date) => setDate(date, 'complete_lte')}
          />
          <DatePicker
            className="p-1"
            placeholderText="complete gte"
            selected={complete_gte}
            onChange={(date) => setDate(date, 'complete_gte')}
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
        <Button variant="outline-success" onClick={resetAll}>
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
      setDropDownValue: (value, dropDownType) =>
        dispatch({
          type: setDropDownValue,
          value,
          dropDownType,
        }),
      setInputValue: (value) => dispatch({ type: setInputValue, value }),
      setDate: (date, dateType) => dispatch({ type: setDate, date, dateType }),
      searchTasks: (queryData) => dispatch(searchTasksThunk(queryData)),
      resetAll: () => dispatch({ type: resetAll }),
    }
  }
)(Search)

export default SearchProvider
