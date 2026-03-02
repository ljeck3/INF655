import { useState } from 'react';
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'

function App() {
  const name1 = "Marquis Nordyke"
  const name2 = "Chris P. Bacon"

  const tasks = [
    "Take out the trash",
    "Do the dishes",
    "Clean the bathroom",
    "Fold laundry",
    "Wash the floor",
  ];
  const [result, setResult] = useState("");
  function getRandomTask() {
    const random = Math.floor(Math.random() * tasks.length);
    console.log(random);
    const randomTask = tasks[random];
    setResult(randomTask);

  }
  return (
    <div className="App">
      <Greeting username={name1} />
      <Greeting username={name2} />
      <UserInfo />
      <button onClick={getRandomTask}>
        Get Random Task
      </button>
      <h3>{result}</h3>
    </div>
    
  );
}

export default App;