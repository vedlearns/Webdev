import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Checker from "./components/Checker";
import { TodoItemsContext } from "./store/TodoItemsContext";
function App() {
  let [Items, setItems] = useState([]);
  const addNewItem = (todoTask, dueDate) => {
    const tempItem = [...Items, { task: todoTask, deadline: dueDate }];
    setItems(tempItem);
  };
  const deleteItem = (item) => {
    const tempItem = [...Items];
    tempItem.forEach((a, index) => {
      if (a.task === item.task && a.deadline === item.deadline)
        tempItem.splice(index, 1);
    });
    setItems(tempItem);
  };
  // const defaultValue=[]
  // const defaultValue=[{task:"learn", deadline:"today"}];
  return (
    <>
      <TodoItemsContext.Provider
        value={{
          items: Items,
          addNewItem,
          deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <Checker />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}
export default App;
