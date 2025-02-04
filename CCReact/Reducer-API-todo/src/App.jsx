import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Checker from "./components/Checker";
import TodoItemsContextProvider from "./store/TodoItemsContext";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <Checker />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}
export default App;
