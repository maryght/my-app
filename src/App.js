import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Conter';
import { useState, useEffect } from "react"


function App() {
  let [color, setColor] = useState("yellow")
  const [Classroom, setClassroom] = useState("all");

  const people = [
    { name: "Javad", gender: "male" },
    { name: "Mary", gender: "female" },
    { name: "Kati", gender: "female" },
    { name: "Hassan", gender: "male" },
    { name: "Laya", gender: "female" }
  ];

  function rang() {
    if (color == "yellow") {
      setColor("magenta")
    }
    else {
      setColor("yellow")
    }

  }
  function onColorChange() {
    alert(color)
  }
  useEffect(onColorChange, [color])

  let displayedPeople = people;
  if (Classroom == "men") {
    displayedPeople = people.filter(function (person) {
      return person.gender == "male";
    });
  } else if (Classroom == "women") {
    displayedPeople = people.filter(function (person) {
      return person.gender == "female";
    });
  }

  function onNameChange() {
    alert(Classroom)
  }
  useEffect(onNameChange, [Classroom])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: color }} onClick={rang} >

          Edit <code>src/App.js</code> and save to reload.
        </h1>

        <Counter></Counter>

        <select onChange={e => setClassroom(e.target.value)}>
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

        <ul>
          {displayedPeople.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>



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
