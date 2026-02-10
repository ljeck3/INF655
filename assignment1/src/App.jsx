import { useState } from 'react';
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'

function App() {
  //task3
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
      <Greeting />
      <UserInfo />
      <button onClick={getRandomTask}>
        Get Random Task
      </button>
      <h3>{result}</h3>
    </div>
    
  );
}

export default App;