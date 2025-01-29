import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Checker from "./components/Checker";
function App() {
  let [Items, setItems] = useState([]);
  const OnAddClick = (todoTask,dueDate) => {
    setItems(currentValue=>[...currentValue,{task:todoTask, deadline:dueDate}]);
  };
  const handleDeleteItem=(item)=>{
    // const tempItem=[...Items].filter(a=> a.task!==item.task)
    const tempItem=[...Items]
    tempItem.forEach((a,index)=>{
      if(a.task===item.task && a.deadline===item.deadline)
        tempItem.splice(index,1);
    })
    setItems(tempItem)
  }
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo
          Tasks={Items}
          onNewItem={OnAddClick}
          onDeleteClick={handleDeleteItem}
        />
       {Items.length===0 &&<Checker />} 
      </center>
    </>
  );
}
export default App;
