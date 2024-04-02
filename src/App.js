import logo from './logo.svg';
import './App.css';
import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
  }

  let fruits = [
    { label: "Apple", value: "🍎" },
    { label: "Banana", value: "🍌" },
    { label: "Orange", value: "🍊" }
  ]

  let options = [
    { label: "blah", value: "blah" },
    { label: "garbage", value: "ridiculous" },
    { label: "jgwentworth", value: "guitar" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" placeholder="Example" ref={inputRef} onChange={onClick}/>
        <select>
          <option value={"Select a fruit"}>Select a Fruit</option>
          {fruits.map((fruits) => <option value={fruits.value}>{fruits.label}</option>)}
        </select>

        <select>
          <option value="Select">Select</option>
          {options.map((options) => <option value={options.value}>{options.label}</option>)}
        </select>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
