import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
function App() {
  const Items = [
    {
    task:"Buy Milk",
    deadline:"17/01/2025"
  },
  {
    task:"Buy Fruits",
    deadline:"17/01/2025"
  },
  {
    task:"Complete Homework",
    deadline:"17/01/2025"
  },
  {
    task:"Finish React ",
    deadline:"22/01/2025"
  },
  {
    task:"Finish DSA",
    deadline:"14/2/2025"
  },
];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo Tasks={Items}/>
      </center>
    </>
  );
}

export default App;
