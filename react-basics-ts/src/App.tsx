import NewButton from './components/review/Button2';
import Counter2 from './components/review/Counter2';
import Input2 from './components/review/Input2';

function App() {

  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div className="App">
      <h1>My React App</h1>
      <NewButton text="NewButton" onClick={handleClick} disabled={false} color='yellow' />
      <Counter2 />
      <Input2 />
    </div>
  );
}

export default App;
