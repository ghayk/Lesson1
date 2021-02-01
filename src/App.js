import './App.css';
import H1 from './component/H1'
import Name from './component/Name'
import SurName from './component/SurName'
import Age from './component/Age'
import TodoList from './component/TodoList'

function App() {
  return (
    <div className="App">
      <H1 />
      <div className="App2">
        <Name />
        <SurName />
        <Age />
        <TodoList />
      </div>
    </div>
  );

}
export default App;
