import './App.css';
import H1 from './component/H1'
import Name from './component/Name'
import SurName from './component/SurName'
import Age from './component/Age'

function App() {
  return (
    <div className="App">
      <H1 />
      <div className="App2">
        <Name />
        <SurName />
        <Age />
      </div>
    </div>
  );

}
export default App;
