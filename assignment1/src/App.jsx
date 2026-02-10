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
  function getRandomTask() {
    const randomTask = Math.floor(Math.random() * tasks.length);
    console.log(randomTask);
    const result = tasks[randomTask];
    alert(result);
  }
  return (
    <div className="App">
      <Greeting />
      <UserInfo />
      <button onClick={getRandomTask}>
        Get Random Task
      </button>
    </div>
    
  );
}

export default App;