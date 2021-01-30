import './App.css';

function App() {
  return (
    <div className="App">
      <Name />
    </div>
  );
}
function Name(){
  let name = 'Hayk'
  return <h1>Hello {name}</h1>
}

export default App;
